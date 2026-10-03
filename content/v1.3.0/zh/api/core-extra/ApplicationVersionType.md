---
title: "ApplicationVersionType"
description: "游戏版本通道枚举：Invalid=-1 加 Alpha/Beta/EarlyAccess/Release/Development 六个取值，同时充当 FromString 与 GetPrefix 的单字符前缀表。"
---

# ApplicationVersionType

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public enum ApplicationVersionType`
**Base:** `System.Enum`（无 [Flags]，不可位组合）
**File:** `TaleWorlds.Library/ApplicationVersionType.cs`（21 行 / 403 字节）

## 概述

`ApplicationVersionType` 回答一个问题：**这个版本属于哪条发布通道？** 六个取值按源码里的声明顺序是 `Invalid = -1`、`Alpha`、`Beta`、`EarlyAccess`、`Release`、`Development`，后面五个自动递增为 0、1、2、3、4。

这个枚举的全部价值在于它是 [ApplicationVersion](../ApplicationVersion) 的「类型位」：结构体的头一个字段 `ApplicationVersionType ApplicationVersionType` 就是它，其余四个是 `Major` / `Minor` / `Revision` / `ChangeSet`。渲染管线把版本号写成 `前缀 + 主.次.修.构建`，前缀就来自本枚举——`v1.3.0.89406` 的 `v` 是 `Release`，`e1.8.1.0` 的 `e` 是 `EarlyAccess`。全树 1.3.0 里的实际字面量有 `v1.2.0`、`v1.3.0`、`e1.8.0`、`e1.8.1.0`、`e1.7.3.0` 这些，全是**单字符**前缀。

## 心智模型

把它当成**「单字符前缀 ↔ 枚举值」的双向映射表**就对了，两侧函数都在 [ApplicationVersion](../ApplicationVersion) 上：

**正向（字符串 → 枚举）** 是 `ApplicationVersion.ApplicationVersionTypeFromString(string)`，实现是一串 `==` 硬比较，只认五个小写字符：`"a"` → `Alpha`、`"b"` → `Beta`、`"e"` → `EarlyAccess`、`"v"` → `Release`、`"d"` → `Development`。其它任何输入都走 `Debug.FailedAssert("Invalid version type.", ...)` 然后返回 `Invalid`。

**反向（枚举 → 字符串）** 是 `ApplicationVersion.GetPrefix(ApplicationVersionType)`，一个 `switch`，五个 case 分别返回 `"a"` / `"b"` / `"e"` / `"v"` / `"d"`，`default` 返回 `"i"`。

这里有两个必须记住的不对称。第一，**`Invalid` 不可逆**：`GetPrefix` 的 `default` 分支会为 `Invalid` 产出 `"i"`，但 `ApplicationVersionTypeFromString("i")` 不接受 `"i"`，所以 `FromString(GetPrefix(x).ToString() + ...)` 这条往返路径在 `Invalid` 上是断的。第二，**底层数值顺序有语义**。`Invalid = -1` 排在最前，`Development` 排在最后（值 4，比 `Release` 的 3 大）。[ApplicationVersion](../ApplicationVersion).`IsOlderThan` 第一句就是 `if (this.ApplicationVersionType < other.ApplicationVersionType) return true;`——直接对枚举做数值比较。所以在这个引擎里 **`d`（Development）被当成比 `v`（Release）更新的通道**，`e`（EarlyAccess）比 `v` 老，`i`（Invalid）比什么都老。这不是笔误，是设计：`e1.8.1.0` 必须比 `v1.0.0` 老，否则所有老存档的版本门禁会全部失效。

第三条：**前缀只取第一个字符**。`ApplicationVersion.FromString` 解析时是 `ApplicationVersionTypeFromString(array[0][0].ToString())` 再 `array[0].Substring(1)` 取数字，所以 `"alpha1.2.3"` 会被当成 `"a"` + `"lpha1"` 然后 `Convert.ToInt32("lpha1")` 抛异常。前缀必须是**恰好一个字符**。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Invalid` | `Invalid = -1` | 解析失败与「无版本」的哨兵值，值 -1 使它在任何 `<` / `>` 比较里都最小。[ApplicationVersion](../ApplicationVersion).`Empty` 就是 `new ApplicationVersion(Invalid, -1, -1, -1, -1)`，也是 `GetPrefix` 唯一会落到 `default` 分支的取值。 |
| `Alpha` | `Alpha`（0） | 内测通道，前缀 `"a"`。 |
| `Beta` | `Beta`（1） | 公测通道，前缀 `"b"`。 |
| `EarlyAccess` | `EarlyAccess`（2） | 抢先体验通道，前缀 `"e"`。游戏历史上大量版本门禁用的是 `e1.8.x`，这个枚举就是它们能排序的原因。 |
| `Release` | `Release`（3） | 正式版通道，前缀 `"v"`。当前 `MBSaveLoad.CurrentVersion` 与绝大多数 `ApplicationVersion.FromString("v1.x.0", 0)` 字面量用的都是它。 |
| `Development` | `Development`（4） | 开发/内部构建通道，前缀 `"d"`，数值最大所以被 `IsOlderThan` 判为「最新」。 |

## 真实示例

正向解析并把失败当哨兵处理（官方 `ApplicationVersionTypeFromString` 的语义：失败只 `FailedAssert` 后返回 `Invalid`，不抛异常）：

```csharp
string versionAsString = "e1.8.1.0";
string prefix = versionAsString.Substring(0, 1);
ApplicationVersionType channel = ApplicationVersion.ApplicationVersionTypeFromString(prefix);
if (channel == ApplicationVersionType.Invalid)
{
    Debug.Print("unparseable version prefix: " + prefix, 0);
}
else
{
    Debug.Print("channel = " + channel, 0);
}
```

反向造一个字符串再喂回 `FromString`，验证往返成立：

```csharp
ApplicationVersionType channel = ApplicationVersionType.EarlyAccess;
string built = ApplicationVersion.GetPrefix(channel) + "1.8.1.0";
ApplicationVersion parsed = ApplicationVersion.FromString(built, 0);
Debug.Print("round trip ok = " + parsed.IsSame(ApplicationVersion.FromString("e1.8.1.0", 0), true), 0);
```

按通道做能力门禁（这是本枚举最常见的用法，数值顺序让 `>=` 直接可用）：

```csharp
public static bool SupportsNewSaveSchema(ApplicationVersion saveVersion)
{
    return saveVersion.ApplicationVersionType >= ApplicationVersionType.Release
        && saveVersion.IsOlderThan(ApplicationVersion.FromString("v1.3.0", 0));
}
```

## 风险与边界

- **数值顺序有语义，不能重排。** 声明顺序一旦改动，所有基于 `<` / `>` 的版本比较会静默反转——不会有任何编译错误。
- **不是 [Flags]。** 不能 `(a | b)` 组合通道，底层数值也只是序号不是位掩码。
- **`Invalid` 的 `ToString()` 往返是断的。** `GetPrefix(Invalid)` 返回 `"i"`，但 `ApplicationVersionTypeFromString("i")` 会 `FailedAssert` 并返回 `Invalid`。
- **解析大小写敏感。** `ApplicationVersionTypeFromString` 只比小写 `"a"` / `"b"` / `"e"` / `"v"` / `"d"`，传 `"V"` 会走到失败分支。
- **解析失败不抛异常。** 唯一会抛的是 [ApplicationVersion](../ApplicationVersion).`FromString` 里的 `throw new Exception("Wrong version as string")`，那要求点分段数是 3 或 4；通道解析本身是静默降级成 `Invalid`。
- **前缀必须恰好一个字符。** `FromString` 只取 `array[0][0]`，剩下的会被当成主版本号去 `Convert.ToInt32`。
- **`Debug.FailedAssert` 的行为取决于构建配置。** 开发者构建里它通常会中断，正式构建里往往只打日志——所以「前缀写错」在两种构建下的表现完全不同，别用「有没有崩」来判断前缀合法性。
- **`Empty` 的字符串形态很怪。** `new ApplicationVersion(Invalid, -1, -1, -1, -1).ToString()` 是 `"i-1.-1.-1.-1"`，因为 `GetPrefix` 的 `default` 分支和负数直接拼字符串。[Campaign](../../campaign/Campaign).`OnLoad` 确实把这个字符串写进 `_previouslyUsedModules`。

## 跨版本提示

`ApplicationVersionType.cs` 在 `bannerlord-1.3.0/`、`bannerlord-1.3.15/`、`bannerlord-1.4.6/`、`bannerlord-1.4.7/`、`bannerlord-1.5.3/` 五棵树里**逐字节一致**：都是 403 字节、21 行、同样的六个取值与同样的声明顺序。

变的是**它在版本比较里的地位**，不是它本身：`[ApplicationVersion](../ApplicationVersion).DefaultChangeSet` 在 1.3.0 是 `89406`，到 1.4.6 / 1.5.3 已经是 `115628`。也就是说**通道枚举稳定，构建号在动**——所以你的版本门禁应该锁在 `Major` / `Minor` / `Revision` 上（官方自己的写法就是 `ApplicationVersion.FromString("v1.3.0", 0)`），而不是拿 `ChangeSet` 当阈值。

## 依赖关系

- 唯一消费者：[ApplicationVersion](../ApplicationVersion) 的 `ApplicationVersionType` 字段、`FromString`、`GetPrefix`、`ApplicationVersionTypeFromString`、`IsOlderThan` 全都围绕本枚举工作
- 序列化：[ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter) 把含本枚举的版本结构写成 `{"_version": "v1.3.0.89406"}`，往返依赖 `GetPrefix` / `FromString` 这对映射
- 存档版本门禁：[MBSaveLoad](../MBSaveLoad) 的 `LastLoadedGameVersion` / `CurrentVersion` / `IsUpdatingGameVersion` 是本枚举排序语义的实际消费者
- 断言输出：[Debug](../Debug) 的 `FailedAssert` 是通道解析失败时的唯一信号
- 元数据读取：[MetaDataExtensions](../MetaDataExtensions) 的 `GetModuleVersion` 走 `ApplicationVersion.FromString`，间接吃本枚举
- 桶首页：[core-extra API 分区](../)