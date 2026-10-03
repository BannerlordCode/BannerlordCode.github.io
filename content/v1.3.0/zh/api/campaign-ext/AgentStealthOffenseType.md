---
title: "AgentStealthOffenseType"
description: "嵌套在 MissionDisguiseMarkerItemVM 里的四值枚举（None=-1 / Default / Visible / Suspicious）。它自己不做任何判断——真正的转换在 GetOffenseTypeIdentifier，界面拿到的还是它的 ToString() 字符串。"
---

# AgentStealthOffenseType

**Namespace:** SandBox.ViewModelCollection.Missions.MainAgentDetection
**Module:** SandBox.ViewModelCollection
**Type:** `public enum AgentStealthOffenseType`（**嵌套在 `MissionDisguiseMarkerItemVM` 类体内**）
**Base:** 无
**File:** `SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionDisguiseMarkerItemVM.cs`（嵌套声明在 `:268-278`）

```csharp
public class MissionDisguiseMarkerItemVM : ViewModel
{
    // ...
    public enum AgentAlarmStateEnum   { None = -1, Alarmed, Cautious, PatrollingCautious, Suspicious, Visible }
    public enum AgentStealthOffenseType { None = -1, Default, Visible, Suspicious }
}
```

## 概述

这是伪装任务里「屏幕上那个头顶标记」的四态视觉分类。四个值：

| 值 | 序号 | 语义 | 怎么来的 |
| --- | --- | --- | --- |
| `None` | **-1**（显式） | 「不要显示这个标记」 | `IsStealthModeEnabled \|\| !IsInVision \|\| !IsInVisibilityRange` 三者任一为真 |
| `Default` | 0（隐式） | 敌人在场但没有具体「罪行」 | `StealthOffenseTypes.None` |
| `Visible` | 1 | 敌人看见了你，且不处于可疑状态 | `StealthOffenseTypes.IsVisible` 且 `!IsSuspicious` |
| `Suspicious` | 2 | 敌人觉得你可疑 | `StealthOffenseTypes.IsVisible` 且 `IsSuspicious`，或 `StealthOffenseTypes.IsInPersonalZone` |

**`None = -1` 是显式赋值的**，其余三个是隐式 0/1/2。这个 -1 不是「未初始化」的意思，而是「**不显示**」的哨兵值——它让 `_offenseType.ToString()` 在不该显示时得到 `"None"` 而不是 `"Default"`。

## 心智模型

**把它当成「一段 switch 的输出」，而不是「一个被外界读到的状态」。**

整棵源码树里，`AgentStealthOffenseType` 的值**只在一个地方被写入**——`MissionDisguiseMarkerItemVM.GetOffenseTypeIdentifier`：

```csharp
// MissionDisguiseMarkerItemVM.cs:159-181
private string GetOffenseTypeIdentifier(StealthOffenseTypes offenseType)
{
    if (this.IsStealthModeEnabled || !this.IsInVision || !this.IsInVisibilityRange)
    {
        this._offenseType = AgentStealthOffenseType.None;
        return this._offenseType.ToString();
    }
    switch (offenseType)
    {
    case StealthOffenseTypes.None:            this._offenseType = AgentStealthOffenseType.Default;  break;
    case StealthOffenseTypes.IsVisible:       this._offenseType = this.IsSuspicious ? AgentStealthOffenseType.Suspicious
                                                                                     : AgentStealthOffenseType.Visible;   break;
    case StealthOffenseTypes.IsInPersonalZone:this._offenseType = AgentStealthOffenseType.Suspicious;  break;
    }
    return this._offenseType.ToString();
}
```

它返回的是 **`string`**——`this._offenseType.ToString()`。也就是说：

> **从 `MissionDisguiseMarkerItemVM` 泄漏给 XML prefab 的从来不是这个枚举，而是它的字符串名。**

`[DataSourceProperty] public string OffenseTypeIdentifier` 就是那个属性，prefab 里做的是字符串比较（选不同的图片资源）。所以**加一个枚举值不会让界面自动多出一个分支**——你还得改 prefab。

另一个必须知道的分支：那个 `switch` **没有 `default:`**。如果 [StealthOffenseTypes](../StealthOffenseTypes) 将来加一个第四个值，switch 会静默不匹配，`this._offenseType` **保持上一次的值**（`_offenseType` 是私有字段，初始化为 `default` 即 `None`），然后返回 `"None"`——**标记凭空消失，没有任何异常或日志**。

`None` 的三条件里有个不对称：**`IsStealthModeEnabled` 用正条件，其余两个用 `!`。** 也就是说：**潜行模式下，所有标记都被强制为 `None`（不显示）**，跟敌人有没有发现你无关。`IsSuspicious` 只在 `StealthOffenseTypes.IsVisible` 分支里被读，不影响 `IsInPersonalZone` 分支——**进入个人区域永远得到 `Suspicious`，不管 `IsSuspicious` 的值。**

## 关键成员

| 值 | 序号 | 谁写它 | 谁读它 |
| --- | --- | --- | --- |
| `None` | -1 | `GetOffenseTypeIdentifier` 的三条件 or 分支（`:162`）；以及 switch 全部不匹配时的隐式 `default(AgentStealthOffenseType)` | 只经 `_offenseType.ToString()` 变成 prefab 里的 `"None"` |
| `Default` | 0 | `StealthOffenseTypes.None` 分支（`:166`） | 同上 → `"Default"` |
| `Visible` | 1 | `StealthOffenseTypes.IsVisible` 且 `!IsSuspicious`（`:168-169`） | 同上 → `"Visible"` |
| `Suspicious` | 2 | `IsVisible` + `IsSuspicious`（`:168`），或 `IsInPersonalZone`（`:171`） | 同上 → `"Suspicious"` |

**注意兄弟枚举 `AgentAlarmStateEnum`（同一文件 `:258-266`）有 5 个值而不是 4 个，且它的 `None` 也是 `-1`。** 两者不是同一维度：`AgentAlarmStateEnum` 由 `UpdateAlarmState`（`:139-158`）按 `Agent.AIStateFlags` 的三个 flag 位（`HasFlag(3)` → `Alarmed`、`HasFlag(1)` → `Cautious`、`HasFlag(2)` → `PatrollingCautious`）决定，是**独立的第三条状态线**。**不要把这两个枚举的值互相比较。**

## 真实示例

读出当前标记的视觉状态（这才是唯一正确的读法，因为枚举字段 `_offenseType` 是 private）：

```csharp
using SandBox.ViewModelCollection.Missions.MainAgentDetection;

private static string DescribeMarker(MissionDisguiseMarkerItemVM vm)
{
    vm.RefreshVisuals();   // 重新计算 OffenseTypeIdentifier + AlarmState
    string id = vm.OffenseTypeIdentifier;   // "None" / "Default" / "Visible" / "Suspicious"
    if (id == "None")
    {
        return "标记不显示（潜行模式 / 不在视野 / 超出可见距离）";
    }
    return id + "  alarm=" + vm.AlarmState + "  " + vm.AlarmProgress + "%";
}
```

反过来自己算一遍，好确认引擎的判断和你的判断一致：

```csharp
private static string PredictOffenseType(bool isStealthModeEnabled, bool isInVision,
                                         bool isInVisibilityRange, bool isSuspicious,
                                         SandBox.Missions.MissionLogics.StealthOffenseTypes raw)
{
    // 与 GetOffenseTypeIdentifier 完全同形的镜像实现
    if (isStealthModeEnabled || !isInVision || !isInVisibilityRange) return "None";
    switch (raw)
    {
    case SandBox.Missions.MissionLogics.StealthOffenseTypes.None:             return "Default";
    case SandBox.Missions.MissionLogics.StealthOffenseTypes.IsVisible:        return isSuspicious ? "Suspicious" : "Visible";
    case SandBox.Missions.MissionLogics.StealthOffenseTypes.IsInPersonalZone: return "Suspicious";
    default:                                                                 return "Default";  // 引擎这里是漏的
    }
}
```

## 风险与边界

- **必须写全名 `MissionDisguiseMarkerItemVM.AgentStealthOffenseType`。** 它是**嵌套类型**，不是命名空间级类型。`using SandBox.ViewModelCollection.Missions.MainAgentDetection;` 只解决命名空间，不解决嵌套。直接写 `AgentStealthOffenseType` 编译不过。
- **界面侧拿到的是字符串，不是枚举。** `[DataSourceProperty] OffenseTypeIdentifier` 的类型是 `string`，值来自 `_offenseType.ToString()`。**在 prefab 里加一个新值的视觉分支时，引擎侧不会自动支持**——你得同时改 `GetOffenseTypeIdentifier` 和 prefab。
- **`GetOffenseTypeIdentifier` 的 `switch` 没有 `default:`。** `StealthOffenseTypes` 未来新增取值时，switch 不匹配、`_offenseType` 保留上一次的值（首次调用时是 `None`）→ **标记静默消失**。这是这个枚举最实际的扩展风险。
- **潜行模式下所有标记强制为 `None`。** `:160` 的 `this.IsStealthModeEnabled ||` 是第一个条件。**「潜行时想用标记提示敌人」在 1.3.0 做不到**——除非你改 `_offenseType` 之外的东西，但那个字段是 private。
- **`None` 会被读到两种完全不同的状态。** 一种是「三条件命中，正确地不显示」；另一种是「switch 没匹配上，兜底没显示」。**从外部无法区分这两种 `None`**——`OffenseTypeIdentifier` 都是 `"None"`。
- **`IsSuspicious` 只在一个分支里生效。** `StealthOffenseTypes.IsInPersonalZone` 分支无条件给 `Suspicious`，不看 `IsSuspicious`。所以「进入个人区域」和「被怀疑」在界面上是同一个图标，**你无法从标记区分这两种情况**。
- **`IsSuspicious` 是外部写进来的。** 它是 `[DataSourceProperty] public bool IsSuspicious { get; set; }`（`:187` 起那一片），由上层 logic 每帧设置，不是本类算出来的。**谁负责维护它、什么条件下更新，取决于上层调用方**——本类只读。
- **`RefreshVisuals()` 必须被显式调用。** 这个枚举的值不会自己变。调用序列是 `RefreshVisuals()` → `GetOffenseTypeIdentifier` + `UpdateAlarmState`；`UpdatePosition()` 是另一个独立入口，只更新 `ScreenPosition`。
- **兄弟枚举 `AgentAlarmStateEnum` 有 5 个值且 `None = -1`，与本枚举容易混淆。** `AgentAlarmStateEnum` 的 `Suspicious`（序号 4）和 `Visible`（序号 5）**在 `UpdateAlarmState` 里从来没被赋值**——那 5 个 if/else 只产出 `Alarmed` / `Cautious` / `PatrollingCautious` / `None` 四个。**`AgentAlarmStateEnum.Suspicious` 与 `Visible` 是死值。**
- **`UpdateAlarmState` 有一个可空的解引用。** `:150` 的 `MathF.Clamp(alarmedBehaviorGroup.AlarmFactor / 2f, 0f, 1f)` 没有 null 检查——`alarmedBehaviorGroup` 在 `:145` 是三元表达式算出来的（`agentNavigator != null ? ... : null`），而 `agentNavigator` 本身来自 `agent.GetComponent<CampaignAgentComponent>().AgentNavigator`（`:142`，**`GetComponent` 的结果没判 null**）。只有 `HasFlag(3)`（Alarmed）那条分支会提前短路跳过这一行。

## 跨版本提示

- **本类型在 1.3.15 与 1.4.5 两棵残缺树里没有对应文件**（缺 `SandBox.ViewModelCollection/Missions/MainAgentDetection/` 目录）。在 1.3.0 / 1.4.6 / 1.4.7 / 1.5.3 四棵树上，**16 条 public/protected 声明逐字相同**，`AgentStealthOffenseType` 的四个成员及其序号（`None = -1` / `Default` / `Visible` / `Suspicious`）**没有任何增删或重排**。
- **`AgentAlarmStateEnum` 的 6 个成员（`None = -1` + 5 个）同样没变**，`UpdateAlarmState` 的三段 `HasFlag` 判断与 `MathF.Clamp(alarmedBehaviorGroup.AlarmFactor / 2f, 0f, 1f)` 也没变——**可空解引用的风险在 1.5.3 上依然存在**。
- **`GetOffenseTypeIdentifier` 的 `switch` 依然没有 `default:` 分支。** 也就是说「switch 漏匹配」这个风险同样被保留到 1.5.3。
- **对 mod 的实际含义：** 枚举值、字符串名、判定条件全都不需要为升级改动。反过来说，**升级不会给你新的标记状态**——想加第四种视觉状态只能自己扩 switch + 改 prefab。

## 依赖关系

- 宿主类：[MissionDisguiseMarkerItemVM](../MissionDisguiseMarkerItemVM)（同桶）——本枚举是它的嵌套类型，写 `_offenseType` 的字段是 private，读出口是 `[DataSourceProperty] string OffenseTypeIdentifier`
- 输入枚举：[StealthOffenseTypes](../StealthOffenseTypes)（同桶，来自 `SandBox.Missions.MissionLogics`）——`GetOffenseTypeIdentifier` 的 switch 参数
- 兄弟枚举：`MissionDisguiseMarkerItemVM.AgentAlarmStateEnum`（同文件，5 值）——由 `UpdateAlarmState` 从 [AIStateFlag](../../mission-ext/AIStateFlag) 的 flag 位算出
- 敌方 agent 数据：[CampaignAgentComponent](../CampaignAgentComponent) 的 `AgentNavigator` → [AgentNavigator](../../gameplay/AgentNavigator) → `AlarmedBehaviorGroup`（同桶）的 `AlarmFactor`
- 坐标投影：`MBWindowManager.WorldToScreenInsideUsableArea`（[MBWindowManager](../../mission-ext/MBWindowManager)），失败时把标记推到 `(-10000, -10000)`
- 逻辑来源：[DisguiseMissionLogic](../DisguiseMissionLogic) 的嵌套类型 `ShadowingAgentOffenseInfo`（`OffenseInfo` 属性的类型）
- 桶首页：[campaign-ext API 分区](../)
