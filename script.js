// 从文本框中获取 IP 列表
function getIPList() {
	return document.getElementById("ip-list").value.trim().split(/\s+/);
}

// 将 IP 列表写回到文本框中
function setIPList(ipList) {
	document.getElementById("ip-list").value = ipList.join("\n");
}

// 去重
function removeDuplicates() {
	const ipList = getIPList();
	const uniqueList = Array.from(new Set(ipList));
	setIPList(uniqueList);
}

// 清除
function clearTextArea() {
	setIPList([]);
}

// 去除端口号
function removePorts() {
	const ipList = getIPList();
	const noPortList = ipList.map(ip => ip.replace(/:\d+$/, ""));
	setIPList(noPortList);
}

// 去除协议
function removeProtocols() {
	const ipList = getIPList();
	const noProtocolList = ipList.map(ip => ip.replace(/^https?:\/\//, ""));
	setIPList(noProtocolList);
}

// 批量加上 CIDR 后缀
function addCIDR(suffix) {
	const ipList = getIPList();
	const cidrList = ipList.map(ip => ip + suffix);
	setIPList(cidrList);
}

// 提取域名
function extractDomains() {
	const ipList = getIPList();
	const domainList = ipList.map(ip => {
		if (ip.match(/^\d+\.\d+\.\d+\.\d+$/)) {
			return "";
		} else {
			const matches = ip.match(/^(?:https?:\/\/)?((?:[\w-]+\.)+\w+)/);
			return matches ? matches[1] : "";
		}
	});
	setIPList(domainList);
}

// 提取 IP
function extractIPs() {
	const ipList = getIPList();
	const ipOnlyList = ipList.map(ip => {
		const matches = ip.match(/^((?:\d+\.){3}\d+)(?::\d+)?$/);
		return matches ? matches[1] : "";
	});
	setIPList(ipOnlyList);
}

