/**
 * _dir_map_contract.mjs — 单一口径：dir-map 的 schemaVersion 由 artifact 自己声明。
 *
 * 为什么不在消费方写死数字：
 *   v3 → v5 那次 bump 让 5 个消费方同时 fail-closed 退出（extract / stubs /
 *   v153 / v147 / index_completeness），工具链整条停摆，而挡住的不是「读错数据」。
 *   写死 `5` 只是把同一个坑推迟到下一次 bump —— 权威已经写在 artifact 自己的
 *   `_parseContract` 里（"Consumers MUST assert schemaVersion===5"），消费方再抄一遍
 *   就是第二份真值，必然漂移。
 *
 * 口径（与 `_parseContract` 一致，FAIL-CLOSED）：
 *   - 期望值从 `_parseContract` 正则抽取，抽不到 → 抛错（不能退化成「不检查」）
 *   - artifact 自报值与声明值不符 → 抛错
 *   - 抛错 = 进程非 0 退出。绝不静默降级：那正是当初 entryPointDirs 整层消失
 *     而 mission/ 与 core/ 归零却不报错的原因。
 */

const RE_VERSION = /schemaVersion\s*===\s*(\d+)/;

/**
 * 从 artifact 的 `_parseContract` 里读出它要求消费方断言的 schemaVersion。
 * @param {object} map 已 JSON.parse 的 _dir-map-canonical.json
 * @returns {number}
 */
export function expectedDirMapSchema(map) {
  const contract = map?._parseContract;
  if (typeof contract !== 'string' || !contract.trim()) {
    throw new Error(
      'dir map 缺 _parseContract（或不是非空字符串）：期望的 schemaVersion 只在契约里声明，' +
      '抽不到就不检查 = 静默降级。FAIL-CLOSED 退出。'
    );
  }
  const m = contract.match(RE_VERSION);
  if (!m) {
    throw new Error(
      'dir map 的 _parseContract 里找不到 "schemaVersion===<数字>"：' + JSON.stringify(contract.slice(0, 160)) +
      '。契约形状变了，先读 artifact 再改本工具。FAIL-CLOSED 退出。'
    );
  }
  return Number(m[1]);
}

/**
 * FAIL-CLOSED 断言：artifact 自报的 schemaVersion 必须等于它自己契约里声明的值。
 * 返回期望值，便于调用方写日志/门禁报告。
 * @param {object} map 已 JSON.parse 的 _dir-map-canonical.json
 * @param {string} [who] 调用方名字，只进错误信息
 * @returns {number} 契约声明的期望 schemaVersion
 */
export function assertDirMapSchema(map, who = 'consumer') {
  const expected = expectedDirMapSchema(map);
  if (map?.schemaVersion !== expected) {
    throw new Error(
      `ARTIFACT_SHAPE_CHANGED[${who}]: _dir-map-canonical.json 自报 schemaVersion=${map?.schemaVersion}，` +
      `但它自己的 _parseContract 要求 ===${expected}。FAIL-CLOSED：拒绝解析不认识的形状` +
      '（否则会静默丢覆写层 / 噪声层）。先读 _parseContract 再改本工具。'
    );
  }
  return expected;
}

/** 同样的断言，但按本仓惯例 console.error + process.exit(1)（老脚本风格，不引异常栈）。 */
export function assertDirMapSchemaExit(map, who = 'consumer') {
  let expected;
  try {
    expected = assertDirMapSchema(map, who);
  } catch (e) {
    console.error('FATAL: ' + e.message);
    process.exit(1);
  }
  return expected;
}
