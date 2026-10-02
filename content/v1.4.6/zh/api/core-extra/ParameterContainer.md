---
title: "ParameterContainer"
description: "字符串键值参数袋：启动参数、XML 覆写值、平衡性数字的统一载体，提供 Bool/Int/UInt16/Float/Byte/SByte/Vec2/Vec3 强类型取值。"
---
# ParameterContainer

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class ParameterContainer`
**Base:** `System.Object`
**File:** `TaleWorlds.Library/ParameterContainer.cs`

## 概述

整个类的内部状态只有一个 `Dictionary<string, string> _parameters`——**所有值都是字符串，类型转换在读取时做**。它提供两组入口：`AddParameter` 系列写入，`TryGetParameterAsXxx` 系列按目标类型读出。`TryGet*` 的语义统一是「key 存在就返回 true 并把 `out` 填成转换结果；key 不存在返回 false 且 `out` 保持默认值」。

值转换全部走 `Convert`，其中 `float` 和 `Vec3`/`Vec2` 显式用了 `CultureInfo.InvariantCulture`——**这是刻意的**：参数文件里小数点必须是 `.`，在德语/法语等逗号作小数点的区域设置下才不会解析错。`bool` 特殊处理，只认 `"true"` 和 `"True"` 两个字符串，其它一律为 `false`（但**仍然返回 true**，因为 key 存在）。

另有两个 `AddParameterConcurrent` / `AddParametersConcurrent`：先 `new Dictionary<string,string>(this._parameters)` 复制一份、在副本上改、再整体赋回 `_parameters`。这是为了并发写时的「读-改-写」原子性——代价是每次调用都做一次全量字典复制。

## 心智模型

典型用法是「先灌数据，再按需强类型取」：

1. **灌数据**。参数通常来自启动命令行、XML 覆写或 mod 自己的配置。用 `AddParameter(key, value, overwriteIfExists: true)` 批量灌。
2. **按需取值**。业务代码用 `TryGetParameterAsFloat("...")` 之类取。**永远用 `TryGet*` 那一族，不要用 `GetParameter`**——后者是 `_parameters[key]`，key 不存在直接抛 `KeyNotFoundException`。
3. **需要独立副本时 `Clone()`**。参数袋经常被传给别的子系统；`Clone()` 逐项复制出一个完全独立的实例。
4. **`ClearParameters()` 是整体换新字典**，不是 `Clear()`——内部引用会被替换掉。

**最坑的一条是 `TryGetParameterAsBool` 的返回值语义**：`outValue = text == "true" || text == "True";` 然后 `return true;`。也就是说 key 存在但值是 `"yes"` 时，返回 **true** 而 `outValue` 是 **false**。返回值回答的是「key 存不存在」，不是「值是不是 true」。写 `if (TryGetParameterAsBool(k, out var v)) { if (v) ... }` 才对；写成 `if (TryGetParameterAsBool(k, out var v) && v)` 会把「值不合法」当成「key 不存在」。

第二条坑：`AddParameter(key, value, overwriteIfExists: false)` 在 key 已存在时**什么都不做也不报错**，静默丢弃。

第三条：`TryGetParameterAsVec3` 用 `text.Split(';')` 后直接取 `[0]` `[1]` `[2]`，**格式不对会抛 `IndexOutOfRangeException`，`FormatException` 从 `Convert` 抛出**。它没有 try/catch。

## 关键成员

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `.ctor` | `public ParameterContainer()` | 新建空字典。无参、无重载，**不能传入初始字典**。 |
| `AddParameter` | `public void AddParameter(string key, string value, bool overwriteIfExists)` | 写入单项。key 不存在 → `Add`；key 存在且 `overwriteIfExists` 为 true → 覆盖；key 存在且为 false → **静默丢弃**。key 为 null 会在 `ContainsKey` 处抛 `ArgumentNullException`。 |
| `AddParameterConcurrent` | `public void AddParameterConcurrent(string key, string value, bool overwriteIfExists)` | 并发安全的单项写入：先复制整个字典 → 在副本上改 → 整体赋回。语义与 `AddParameter` 相同，代价是 O(n) 复制。**注意「整体赋回」这一步本身不是原子的**，它只是把竞争窗口从「ContainsKey+Add 两次操作」缩到「一次引用赋值」。 |
| `AddParametersConcurrent` | `public void AddParametersConcurrent(IEnumerable<KeyValuePair<string, string>> parameters, bool overwriteIfExists)` | 批量并发写入。同样先复制字典，逐项套用与 `AddParameter` 相同的规则（存在且不覆盖则跳过），最后整体赋回。 |
| `ClearParameters` | `public void ClearParameters()` | 把 `_parameters` 整个换成新的空字典。**不是 `Clear()`**——如果有别处持有了旧字典的引用，它们看到的仍是旧内容。 |
| `TryGetParameter` | `public bool TryGetParameter(string key, out string outValue)` | 原始取值。返回 `Dictionary.TryGetValue` 的结果；失败时 `outValue` 为 null。**key 存在但值是空串也返回 true。** |
| `TryGetParameterAsBool` | `public bool TryGetParameterAsBool(string key, out bool outValue)` | `outValue` 初始化为 false；key 存在时 `outValue = (text == "true" \|\| text == "True")` 并**返回 true**。只认这两种写法，其余值都是 false 但仍返回 true。 |
| `TryGetParameterAsInt` | `public bool TryGetParameterAsInt(string key, out int outValue)` | `outValue` 初始化 0；key 存在时 `Convert.ToInt32(text)`。**非数字文本抛 `FormatException`，无 try/catch。** |
| `TryGetParameterAsUInt16` | `public bool TryGetParameterAsUInt16(string key, out ushort outValue)` | 同上，`Convert.ToUInt16`。负数或超 65535 会抛 `OverflowException`。 |
| `TryGetParameterAsFloat` | `public bool TryGetParameterAsFloat(string key, out float outValue)` | `outValue` 初始化 0f；key 存在时 `Convert.ToSingle(text, CultureInfo.InvariantCulture)`。**用不变文化解析，保证 `.` 作小数点。** |
| `TryGetParameterAsByte` | `public bool TryGetParameterAsByte(string key, out byte outValue)` | `Convert.ToByte`，溢出抛 `OverflowException`。 |
| `TryGetParameterAsSByte` | `public bool TryGetParameterAsSByte(string key, out sbyte outValue)` | `Convert.ToSByte`。 |
| `TryGetParameterAsVec3` | `public bool TryGetParameterAsVec3(string key, out Vec3 outValue)` | 用 `;` 分割字符串，取前 3 段各自 `Convert.ToSingle(..., InvariantCulture)`，构造 `new Vec3(x, y, z, -1f)`。**段数不足 3 会抛 `IndexOutOfRangeException`；任何非数字段抛 `FormatException`。** |
| `TryGetParameterAsVec2` | `public bool TryGetParameterAsVec2(string key, out Vec2 outValue)` | 同上但取前 2 段，构造 `new Vec2(x, y)`。 |
| `GetParameter` | `public string GetParameter(string key)` | **直接索引 `_parameters[key]`。key 不存在抛 `KeyNotFoundException`，不存在「返回 null」这条路径。** 只在确定 key 一定存在时用。 |
| `Iterator` | `public IEnumerable<KeyValuePair<string, string>> Iterator { get; }` | 返回内部字典本身（类型是 `IEnumerable`）。遍历期间**不要调 `AddParameter`**，会抛 `InvalidOperationException`。 |
| `Clone` | `public ParameterContainer Clone()` | 逐项复制出一个全新实例。**值是字符串，天然深拷贝**，无共享引用问题。 |

## 真实示例

灌一批参数再按强类型取（推荐形状）：

```csharp
ParameterContainer parameters = new ParameterContainer();
parameters.AddParameter("mod.damage_multiplier", "1.25", true);
parameters.AddParameter("mod.debug_mode", "True", true);
parameters.AddParameter("mod.banner_offset", "10.5;3.0;0.0", true);

// 读：返回值只表示 key 存不存在
if (parameters.TryGetParameterAsFloat("mod.damage_multiplier", out float multiplier))
{
    Debug.Print("multiplier = " + multiplier, 0);
}

if (parameters.TryGetParameterAsBool("mod.debug_mode", out bool debugMode) && debugMode)
{
    Debug.Print("debug on", 0);
}
```

向量参数与安全判空（格式错会抛，不要吞）：

```csharp
ParameterContainer parameters = new ParameterContainer();
parameters.AddParameter("spawn.point", "100.0;50.0;25.0", false);

if (parameters.TryGetParameterAsVec3("spawn.point", out Vec3 point))
{
    Debug.Print("spawn at " + point.x + "," + point.y + "," + point.z, 0);
}

// 一次性全量灌入（先复制字典再写）
parameters.AddParametersConcurrent(new[]
{
    new KeyValuePair<string, string>("a", "1"),
    new KeyValuePair<string, string>("b", "2")
}, true);
```

## 风险与边界

- **`TryGetParameterAsBool` 的 bool 返回值不表示「是真」**。key 存在就返回 true，即使值是 `"no"`。必须 `&& outValue`。
- **`GetParameter` 会抛。** 索引器语义，缺 key 是 `KeyNotFoundException`。业务代码一律用 `TryGet*`。
- **强类型转换全部不设防。** `Convert` 的 `FormatException` / `OverflowException`、`Split` 后的 `IndexOutOfRangeException` 都会直接冒泡。参数来自外部输入（命令行、用户配置）时要在写入侧校验。
- **`ConvertToSingle` 用不变文化但 `Convert.ToInt32` 不用。** `TryGetParameterAsInt` 走 `Convert.ToInt32(text)`，用的是**当前区域设置**。在某些区域下带千分位或本地化数字的文本行为不同——参数文件请统一写纯 ASCII。
- **`AddParameter(overwriteIfExists: false)` 静默丢弃。** 没有返回值告诉你写没写进去。
- **`AddParameterConcurrent` 不是真原子。** 复制-修改-赋回把窗口缩小了，但最后那一步引用赋值仍不是 CAS。多线程高频写同一 `ParameterContainer` 依然有丢更新风险。
- **`Iterator` 是内部字典。** 遍历时增删抛 `InvalidOperationException`；`ClearParameters()` 之后旧枚举器失效。
- **`ClearParameters` 换引用。** 别人持有的 `Iterator` 或旧枚举器仍指向旧字典。
- **无 `Remove` / `ContainsKey` 公开成员。** 想删除只能 `AddParameter(k, v, ...)` 覆盖，改不了键集合。

## 跨版本提示

`bannerlord-1.3.15/` 与 `bannerlord-1.4.6/` 的 `TaleWorlds.Library/ParameterContainer.cs` 逐行比对，**public 表面完全一致**：无参构造、`AddParameter` / `AddParameterConcurrent` / `AddParametersConcurrent` / `ClearParameters`、`GetParameter`、`TryGetParameter` 及 Bool/Int/UInt16/Float/Byte/SByte/Vec3/Vec2 八个强类型重载、`Iterator` 属性、`Clone` 全都没变。

**1.4.5 侧结论**：打开 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/ParameterContainer.cs`（190 行）与 `bannerlord-1.4.6/TaleWorlds.Library/ParameterContainer.cs`（226 行）逐成员比对 public/protected 表面。**三版 public 表面完全一致（各 16 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。1.4.5 是 190 行、1.4.6 是 226 行。

**为什么这份源码之前被判为「不存在」**：`bannerlord-1.4.5/` 的 C# 源码在 `Bannerlord.Source/bin/` 下**双层嵌套** `bin/<Assembly>/<Assembly>/<Type>.cs`，而 `bin/` 的一层里没有任何 `.cs`（实测 `find bannerlord-1.4.5/Bannerlord.Source/bin -maxdepth 1 -name "*.cs"` 命中 0），只扫一层就会误判成无源码。**1.4.5 是原始源码形态**（file-scoped namespace、无 `// Token:` 注释），1.4.6 与 1.3.15 是反编译产物，所以两边的行数不可直接比大小。

## 依赖关系

- 真实使用者：[Game](../Game) 的 `InitializeParameters()` 通过 `ManagedParameters` 读 `managed_core_parameters.xml` 走的就是同一套 key-value 模式
- 数值载体：`Vec2` / `Vec3` 是 `TryGetParameterAsVec2` / `AsVec3` 的输出类型（`TaleWorlds.Library` 内的向量结构）
- 桶首页：[core-extra API 分区](../)
