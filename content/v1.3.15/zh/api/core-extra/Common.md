---
title: "Common"
description: '一组进程级静态工具：字符串/哈希/JSON 序列化、反射调用、GC 回收与线程文化等基础能力，供整个引擎复用。'
---
# Common

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class Common`
**Base:** 无
**File:** `TaleWorlds.Library/Common.cs`

> 版本差异：1.3.15 与 1.4.5 的公开成员基本一致；`ConfigName`、`ParallelOptions` 在 1.4.5 改为表达式体属性，行为不变。

## 一句话职责

它是引擎各处都会顺手调用的「瑞士军刀」：哈希、JSON、字节拼接、类型查找、安全反射调用、GC 回收、线程文化设置——纯静态、无状态、无实例。

## 心智模型

- **生命周期**：`static class`，随程序集加载即就绪，无需创建、无法销毁。所有字段（`_fileHelper`、`_parallelOptions`、`lastGCTime`）都是进程级共享的。
- **谁持有**：无人「持有」——任何代码随时可 `Common.XXX()` 直接调用。它是 Foundation 层（`TaleWorlds.Library`）最底层的工具箱，被 Core、Campaign、Mission、UI 各层共同依赖。
- **所属层**：Foundation（基础设施）。它不是游戏逻辑，而是支撑逻辑的工具。
- **注意**：因为无状态且全局共享，凡是写 `PlatformFileHelper` 这类静态字段的操作都具有进程级副作用。

## 何时用 / 何时不要用

- **用**：需要 MD5、JSON 序列化/反序列化、URL-safe Base64、按名字找类型、捕获反射调用异常并写入崩溃报告、在启动时固定线程文化、主动触发一次 GC。
- **不要用**：常规字符串操作请用 `System.String` / `MBStringBuilder`，不要为了「方便」而混用；不要在每帧热路径里调 `FindType`（遍历所有程序集）或 `MemoryCleanupGC`（强制全回收会卡顿）。需要本地化文本请用 `GameTextManager`，而非这里。

## 依赖图
- [Debug](../Debug) — `DynamicInvokeWithLog` 等会把诊断信息写入崩溃报告并 `Debug.Print`
- [MathF](../MathF) — `ParallelOptions` 计算最大并行度时用到 `MathF.Max`
- [GameStateManager](../GameStateManager) — 状态切换后调用 `Common.MemoryCleanupGC` 回收内存
- [崩溃边界](../../../architecture/crash-boundaries) — 理解 `DynamicInvokeWithLog` 写入崩溃报告的风险
- [SDK 总览](../../../architecture/sdk-overview) — Library 位于 Foundation 层

## 风险段

- **静态字段全局共享**：`PlatformFileHelper` 一旦被某处改写，进程内所有读取者都受影响；多游戏实例/测试环境下尤其要小心覆盖时机。
- **`MemoryCleanupGC` 强制回收**：内部 `GC.Collect()` 会触发全代回收，频繁调用造成明显卡顿。它由 `GameStateManager` 在状态切换后调用一次即可，mod 不应主动频繁调用。
- **`DynamicInvokeWithLog` / `InvokeWithLog` 不吞异常**：它们捕获异常只是为了调用 `Debug.SetCrashReportCustomString` / `SetCrashReportCustomStack` 记录诊断，随后**原样 `throw`**。误以为它们会静默失败是常见 bug。在非崩溃上下文里调用会污染「下一次」崩溃报告内容。
- **`FindType` 开销大**：遍历 `AppDomain.CurrentDomain.GetAssemblies()` 并逐个 `GetType`，不要放进循环或每帧逻辑；结果不缓存。
- **`SetInvariantCulture` 改线程文化**：应在程序最早启动阶段调用一次；若在 UI 已建立、本地化格式已确定之后再调用，可能打乱数字/日期显示。
- **`ToRoman` 越界只断言不抛异常**：`number < 0 || number > 3999` 时走 `Debug.FailedAssert`，返回空串——别依赖它报错。
- **`ParseIpAddress` 会抛异常**：非法 IP 串会由 `IPAddress.Parse` 抛出 `FormatException`，需调用方兜底。

## 成员说明

### 静态属性 `PlatformFileHelper`
`get; set;`，类型 `IPlatformFileHelper`。全局文件Helper 入口，引擎启动时注入；mod 读取它做跨平台路径操作，一般不要改写。

### 静态属性 `ConfigName`
`get`。返回当前工作目录目录名（`Directory.GetCurrentDirectory()` 的最后一段），常用于区分「启动配置」。

### 静态属性 `ParallelOptions`
`get`。惰性创建并缓存的 `ParallelOptions`，`MaxDegreeOfParallelism = MathF.Max(Environment.ProcessorCount - 2, 1)`，供并行计算（如 `TWParallel`）复用。

### `CombineBytes(byte[] arr1, byte[] arr2, byte[] arr3 = null, byte[] arr4 = null, byte[] arr5 = null)`
把最多 5 段字节按序拼接成一段新数组，内部用 `Buffer.BlockCopy`，无副作用。适合拼网络包/存档块头。

### `CreateNanoIdFrom(string)` / `CalculateMD5Hash(string)`
`CreateNanoIdFrom` 用 SHA256 把输入压成 8 位 URL 安全 ID；`CalculateMD5Hash` 返回 32 位大写十六进制 MD5。用于校验、去重、生成稳定 ID。

### `ToRoman(int)` / `GetDJB2(string)`
`ToRoman` 把整数转罗马数字（1–3999，越界仅断言）；`GetDJB2` 实现 DJB2 哈希，返回 `int`，用于字符串快速散列。

### `SerializeObjectAsJson(object)` / `SerializeObjectAsJsonString(object)` / `DeserializeObjectFromJson<T>(string)`
基于 Newtonsoft.Json 的序列化封装：前两者返回 UTF-8 字节 / 字符串，第三者按类型反序列化。适合配置、网络消息、调试导出。

### `FromUrlSafeBase64(string)`
把 `_`/`-` 还原为标准 Base64 并补 `=` 填充后解码，返回字节。处理前端/网络传来的 URL 安全 Base64 时用。

### `FindType(string)`
按全名在已加载程序集中查找 `Type`。开销大、不缓存，仅在启动/反射注册期使用。

### `MemoryCleanupGC(bool forceTimer = false)`
强制 `GC.Collect()` 并记录 `lastGCTime`。由状态切换等关键节点调用一次，勿在热路径滥用。

### `DynamicInvokeWithLog(this Delegate, params object[])` / `InvokeWithLog(this MethodInfo, object, params object[])` / `InvokeWithLog(this ConstructorInfo, params object[])`
带日志的反射调用。捕获异常 → 写崩溃报告诊断（方法名、目标类型、参数类型、内层消息与堆栈）→ 重新抛出。用于引擎自省/序列化回调，mod 一般直接用普通 `Invoke` 即可。

### 字符串/字符判定
`TextContainsSpecialCharacters`（是否含非空白/非字母数字/非标点的字符）、`ParseIpAddress`（IP→uint）、`IsAllLetters`、`IsAllLettersOrWhiteSpaces`、`IsCharAsian`（CJK 等亚洲字符范围判定）。纯判断，无副作用。

### `SetInvariantCulture()`
把当前线程及默认线程的文化设为 `CultureInfo.InvariantCulture`，保证数值/日期格式跨 locale 一致。启动早期调用一次。

### `GetMethodInfo(...)` 重载
从 `Expression<...>` 提取 `MethodInfo`（支持无参/带 `T`/带返回值三种表达式）。用于拿到方法元数据而不靠魔法字符串。

## 最小真实示例

**示例 1 — 计算 MD5 并序列化对象为 JSON 字符串**

```csharp
string hash = Common.CalculateMD5Hash("Bannerlord Mod");
string json = Common.SerializeObjectAsJsonString(this);
Campaign campaign = Common.DeserializeObjectFromJson<Campaign>(json);
```

**示例 2 — 启动时固定文化并查找类型**

```csharp
Common.SetInvariantCulture();
Type campaignType = Common.FindType("TaleWorlds.CampaignSystem.Campaign");
Common.MemoryCleanupGC(false);
```

## 导航

- ↑ Parent：[core-extra 索引](../)
- ↔ Sibling：[Debug](../Debug)、[MathF](../MathF)、[Color](../Color)、[Colors](../Colors)、[ColorExtensions](../ColorExtensions)
- 相关：[GameStateManager](../GameStateManager)、[崩溃边界](../../../architecture/crash-boundaries)、[SDK 总览](../../../architecture/sdk-overview)
