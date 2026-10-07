---
title: "ApplicationVersionType"
description: "版本成熟度枚举：Invalid = -1，Alpha / Beta / EarlyAccess / Release / Development 依次为 0..4。注意 Release(4) 小于 Development(5) 的数值直觉——这个顺序被 ApplicationVersion.IsOlderThan 与 operator> 直接采用，所以 \"d1.0.0\" 被判定为比 \"v9.9.9\" 更新。"
---

# ApplicationVersionType

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public enum ApplicationVersionType`
**Base:** 无
**File:** `TaleWorlds.Library/ApplicationVersionType.cs`

## 概述

`ApplicationVersionType` 是游戏版本号的**成熟度阶段**——这是抢先体验版、早期访问版还是正式版。它只有 6 个成员、11 行源码，是 [ApplicationVersion](../ApplicationVersion) 结构体里 `ApplicationVersionType` 属性的类型，也是版本字符串首字母（`a` / `b` / `e` / `v` / `d`）的映射表。

它承担的是**「版本可比较性的第一个维度」**这一环。[ApplicationVersion](../ApplicationVersion) 的 `IsOlderThan` / `IsNewerThan` / `operator>` **全部先比较这个枚举的数值**，再比 `Major.Minor.Revision`，最后才比 `ChangeSet`。所以这个枚举的**成员顺序不是随便排的——它是一个排序键**。

## 心智模型

把它当成**版本比较的第一级排序键**，而不是一个「标签」。这是它唯一但极其重要的用途。

**心智模型的核心是一个反直觉的事实：`Release` 不是最后一个成员。** 成员顺序是：

| 值 | 成员 | 字符串前缀 |
| --- | --- | --- |
| -1 | `Invalid` | `i` |
| 0 | `Alpha` | `a` |
| 1 | `Beta` | `b` |
| 2 | `EarlyAccess` | `e` |
| 3 | `Release` | `v` |
| 4 | `Development` | `d` |

**`Release`(3) 排在 `Development`(4) 之前。** 这个顺序不是笔误，而是 `[ApplicationVersion](../ApplicationVersion)` 的比较逻辑直接依赖的：`IsOlderThan`（`ApplicationVersion.cs:71-100`）第一句就是 `if (ApplicationVersionType < other.ApplicationVersionType) return true;`，`operator>`（`:170-190`）第一句是 `if (a.ApplicationVersionType > b.ApplicationVersionType) return true;`。**结果就是：`ApplicationVersion.FromString("d1.0.0")` 被判定为比 `FromString("v9.9.9")` 更新**，因为 4 > 3。

**这个设计是有道理的**：内部开发版（`d`）比任何对外发行版都「新」，所以排在最后。但它和「正式版比抢先体验版新」的直觉在**跨前缀**时冲突——`e1.0.0`(2) 比 `v1.0.0`(3) 老，这个方向是对的；`d1.0.0` 比 `v1.0.0` 新，这个方向也是设计意图。**真正会坑人的是拿它去和玩家沟通版本新旧。**

**第二个心智锚点是 `Invalid = -1` 而 `GetPrefix` 给它返回 `"i"`。** `[ApplicationVersion](../ApplicationVersion)` 的 `GetPrefix`（`:133-146`）用一个 switch 表达式覆盖了 Alpha/Beta/EarlyAccess/Release/Development 五个成员，`_` 分支返回 `"i"`。**也就是说 `Invalid` 的字符串形式是 `i-1.-1.-1.-1` 这样的东西**（因为 `Empty` 是 `new ApplicationVersion(Invalid, -1, -1, -1, -1)`）。这不是能拿去显示的版本号。

**第三个锚点是解析失败会触发断言。** `ApplicationVersionTypeFromString`（`:101-121`）的 `default` 分支调 `Debug.FailedAssert("Invalid version type.", ...)` 然后返回 `Invalid`。**它不是抛异常**——所以一个格式错误的版本字符串会得到一个「无效版本」而不是崩溃，但**在 shipping 构建里 `FailedAssert` 可能什么都不做**，此时你只是悄悄拿到了 `Invalid`。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Invalid` | `Invalid = -1` | 「这不是一个有效版本」。**唯一的负值成员**，因此任何 `< 0` 的判断都能识别它。它是 `ApplicationVersionTypeFromString` 遇到未知前缀时的返回值（伴随一次 `Debug.FailedAssert`）。**注意 `GetPrefix(Invalid)` 返回 `"i"`**，所以 `ApplicationVersion.Empty.ToString()` 会产出一个 `i-1.-1.-1.-1` 形状的怪串。 |
| `Alpha` | `Alpha = 0` | 内部 alpha 阶段。版本字符串前缀 `a`（`GetPrefix` 映射）。**值 0 意味着它是「最低成熟度」**，但也意味着它**是唯一能与 `Invalid` 用 `< 0` 区分开来的边界**。 |
| `Beta` | `Beta = 1` | 公测阶段。前缀 `b`。 |
| `EarlyAccess` | `EarlyAccess = 2` | 抢先体验阶段。前缀 `e`。这是《骑马与砍杀 2》的正式发行模式，**在 Campaign 层的版本迁移代码里出现频率最高**——`Clan.cs:801/812` 的 `MBSaveLoad.LastLoadedGameVersion < ApplicationVersion.FromString("e1.8.0.0")` 就是典型。 |
| `Release` | `Release = 3` | 正式发行版。前缀 `v`。**注意它不是最后一个成员**：`Development`(4) 排在它之后，因为 `IsOlderThan` / `operator>` 直接按数值比较这个枚举。这是本页最需要记住的一条。 |
| `Development` | `Development = 4` | 内部开发版。前缀 `d`。**数值最大，因此在比较中被判定为「最新」**。它排在这个位置正是为了让内部构建覆盖过所有对外发行版——代价是 `d1.0.0 > v9.9.9` 成立。 |
| （前缀映射）`GetPrefix` | `[ApplicationVersion](../ApplicationVersion).GetPrefix(ApplicationVersionType)`，`ApplicationVersion.cs:133-146` | 把枚举映射成版本字符串的首字母（`a`/`b`/`e`/`v`/`d`）。**`Invalid` 没有 case，走 `_` 分支返回 `"i"`。** 这是一张由 switch 表达式定义的映射表，改枚举成员就要同步改它。 |

## 真实示例

版本字符串与枚举之间的往返，这是这个枚举最主要的用法（结构照 `ApplicationVersion.cs:56-73` 与 `:101-121`）：

```csharp
// "v1.2.3" -> Release, "e1.8.0.0" -> EarlyAccess with a changeset, "d1.0.0" -> Development
ApplicationVersion release = ApplicationVersion.FromString("v1.2.3");
Debug.Print("parsed = " + release.ApplicationVersionType, 0);
Debug.Print("round trip = " + release.ToString(), 0);

// The maturity stage is compared FIRST by both IsOlderThan and operator>.
ApplicationVersion development = ApplicationVersion.FromString("d1.0.0");
bool developmentIsNewer = development > release;
Debug.Print("d1.0.0 > v1.2.3 ? " + developmentIsNewer, 0);
```

写一个不会把哨兵与 `Invalid` 搞混的辅助函数：

```csharp
public static class VersionStageClassifier
{
    public static bool IsRealStage(ApplicationVersionType stage)
    {
        // Release and Development are both real stages even though Development
        // sorts after Release -- never cap the range at Release.
        return stage >= ApplicationVersionType.Alpha
            && stage <= ApplicationVersionType.Development;
    }

    public static bool IsShippedToPlayers(ApplicationVersionType stage)
    {
        // EarlyAccess is shipped to players; Development is not.
        return stage == ApplicationVersionType.EarlyAccess
            || stage == ApplicationVersionType.Release;
    }

    public static string Describe(ApplicationVersionType stage)
    {
        // GetPrefix(Invalid) returns "i", which is not a displayable prefix.
        if (stage == ApplicationVersionType.Invalid)
        {
            return "invalid";
        }
        return ApplicationVersion.GetPrefix(stage);
    }
}
```

复刻 `ApplicationVersionTypeFromString` 的未知前缀处理，看清它是断言而非异常：

```csharp
private static ApplicationVersionType Classify(string prefix)
{
    switch (prefix)
    {
        case "a": return ApplicationVersionType.Alpha;
        case "b": return ApplicationVersionType.Beta;
        case "e": return ApplicationVersionType.EarlyAccess;
        case "v": return ApplicationVersionType.Release;
        case "d": return ApplicationVersionType.Development;
        default:
            // The real method calls Debug.FailedAssert here and returns Invalid.
            // It does NOT throw, so a bad version string yields a valid-looking
            // struct whose ApplicationVersionType is Invalid.
            Debug.Print("invalid version type prefix: " + prefix, 0);
            return ApplicationVersionType.Invalid;
    }
}

private void ReportBadVersion()
{
    Debug.Print("unknown prefix -> " + Classify("x"), 0);
    Debug.Print("empty prefix  -> " + Classify(""), 0);
}
```

## 风险与边界

- **`Release` 不是最后一个成员。** 排序键是 `Development`(4) > `Release`(3) > `EarlyAccess`(2) > `Beta`(1) > `Alpha`(0)。**因此 `FromString("d1.0.0") > FromString("v9.9.9")` 成立。** 用它跟玩家比较版本新旧会得到荒谬的结论。
- **`Invalid = -1` 且 `GetPrefix(Invalid) == "i"`。** `ApplicationVersion.Empty` 是 `new ApplicationVersion(Invalid, -1, -1, -1, -1)`，`ToString()` 会拼出 `i-1.-1.-1.-1` 这种形状的串。**它不是可显示的版本号。**
- **解析失败不抛异常。** `ApplicationVersionTypeFromString` 的 `default` 分支是 `Debug.FailedAssert(...)` 加 `return ApplicationVersionType.Invalid;`。**结果是一个「看起来正常、实际无效」的结构体**，而 `Debug.FailedAssert` 在非测试构建里可能完全静默。**务必显式判 `== ApplicationVersionType.Invalid`。**
- **`FromString` 本身会抛。** `ApplicationVersion.cs:60-63`：段数不是 3 也不是 4 时 `throw new Exception("Wrong version as string")`。**这是一个裸 `Exception`，不是自定义异常类型**，捕获它只能靠 `catch (Exception)`。
- **空字符串会抛 `IndexOutOfRange`。** `array[0][0]` 在 `FromString` 里被直接索引（`:65`）。`FromString("")` 会走到 `array.Length != 3` 的判断抛「Wrong version as string」，但 `FromString(".1.2")` 这种首段为空的会在 `array[0][0]` 上越界。**版本串来自外部输入时要自己先校验。**
- **前缀映射是一张需要同步维护的表。** `GetPrefix`（`ApplicationVersion.cs:133-146`）用 switch 表达式覆盖了除 `Invalid` 外的全部成员。**新增枚举成员而不改这张表，会落到 `_` 分支拿到 `"i"`。**
- **它只决定比较的第一级，不决定版本是否兼容。** 存档兼容判断还要落到 `Major` / `Minor` / `Revision` / `ChangeSet`。**只比 `ApplicationVersionType` 是不够的。**
- **它是 `int` 底层（默认值），不是 `uint`。** 所以 `Invalid = -1` 合法。这是本页唯一一个带负值的成员，遍历时别把它当越界。

## 怎么用

### 怎么拿到它

`public enum ApplicationVersionType`（`TaleWorlds.Library/ApplicationVersionType.cs:3`）。你不会直接写它——它由 `ApplicationVersion.FromString(string)` 从版本串的首字母反解出来，读入口是 `ApplicationVersion.ApplicationVersionType` 属性。前缀映射表在 `ApplicationVersion.cs:133-146` 的 `GetPrefix`。

### 典型用法

上面「真实示例」两段是「字符串往返」和「分类辅助」。落到 mod 代码上最常见的是**特性门槛**，而门槛必须先处理 `Development`——它的值是 4，排在 `Release` 之后：

```csharp
public static class StageGate
{
    public static bool MeetsMinimum(ApplicationVersion running, ApplicationVersionType minimum)
    {
        // Invalid 是唯一的负值成员，先把它排除掉：它不是「很早期」，是「无效」
        if (running.ApplicationVersionType == ApplicationVersionType.Invalid)
        {
            return false;
        }
        // Development(4) 排在 Release(3) 之后：直接比会把 d1.0.0 判成比任何发行版都新
        if (running.ApplicationVersionType == ApplicationVersionType.Development)
        {
            return true;   // 内部构建一律放行，不要让它参与排序
        }
        return running.ApplicationVersionType >= minimum;
    }
}
```

与上面「真实示例」的差别：那两段都是**描述这个枚举**——把值解析出来、把值分类、把它转成前缀；而这里是把枚举接进**一条决策**：先用两个前置判断（`Invalid` 排除、`Development` 放行）把排序键里最反直觉的两个成员处理掉，剩下的比较才可信。`GetPrefix` 那张映射表在这里完全用不上，因为门槛比的是数值而不是字符串。

### 最容易踩的坑

**`Release` 不是最后一个成员。** 排序键是 `Development`(4) > `Release`(3) > `EarlyAccess`(2) > `Beta`(1) > `Alpha`(0)。**因此 `FromString("d1.0.0") > FromString("v9.9.9")` 成立。**

## 跨版本提示

`ApplicationVersionType.cs` 在 1.4.5 是 11 行、6 个成员，是原始源码形态。1.3.x / 1.4.6 的对应文件是反编译产物。**跨版本迁移真正要核对的不是成员列表，而是「成员顺序」**：因为 `IsOlderThan` 与 `operator>` **直接用数值比较这个枚举**，所以**在中间插入一个新成员（例如在 `Release` 与 `Development` 之间加一个 `Preview`）会改变所有版本比较的结果**，而不只是新增一种前缀。同理，`GetPrefix` 的 switch 覆盖集合、以及 `ApplicationVersionTypeFromString` 的 `case` 标签集合也必须同步更新——**三者是一体的**。**永远不要假设「成员顺序只是实现细节」。**

## 依赖关系

- 宿主：[ApplicationVersion](../ApplicationVersion) 的 `ApplicationVersionType` 属性，四个整数与其共同构成一个版本号
- 前缀映射：`ApplicationVersion.GetPrefix(ApplicationVersionType)`（`ApplicationVersion.cs:133-146`）与 `ApplicationVersionTypeFromString(string)`（`:101-121`）构成双向映射
- 排序消费者：`ApplicationVersion.IsOlderThan`（`:71-100`）与 `operator>`（`:170-190`）**先比较本枚举的数值**
- 字符串格式：`ApplicationVersion.ToString()`（`:148-152`）用 `GetPrefix` 的结果拼出 `v1.2.3.4` 形状
- 哨兵：`ApplicationVersion.Empty` = `new ApplicationVersion(ApplicationVersionType.Invalid, -1, -1, -1, -1)`
- JSON：经 `ApplicationVersionJsonConverter`（见下）序列化成 `{ "_version": "v1.2.3.4" }`
- 实际使用方（Campaign 层）：`../../campaign/Clan.cs:801/812/816/820`、`../../campaign/Campaign.cs:612-629`、`../../campaign/CampaignPeriodicEventManager.cs:199`、`../../campaign/CharacterRelationManager.cs:153` —— 全是存档版本迁移判断
- 桶首页：[core-extra API 分区](../)