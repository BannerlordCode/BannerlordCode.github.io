---
title: "AgentStealthOffenseType"
description: "潜行/伪装任务里「玩家犯了哪种潜行过错」的 UI 编码枚举，嵌在 MissionDisguiseMarkerItemVM 内部。它把 DisguiseMissionLogic 产出的 StealthOffenseTypes 与「是否被怀疑 / 是否在视野内」两个布尔翻译成 4 个字符串标识（None/Default/Visible/Suspicious），由 Gauntlet 刷子按文本切换发光状态。"
---
# AgentStealthOffenseType

**命名空间：** `SandBox.ViewModelCollection.Missions.MainAgentDetection`  
**模块：** `SandBox.ViewModelCollection`  
**类型：** `public enum AgentStealthOffenseType`  
**源文件：** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions.MainAgentDetection/MissionDisguiseMarkerItemVM.cs`（303 行）

## 概述

`AgentStealthOffenseType` 是 `MissionDisguiseMarkerItemVM`（`MissionDisguiseMarkerItemVM.cs:9`）的**内部嵌套枚举**，没有独立源文件。声明在 `MissionDisguiseMarkerItemVM.cs:21`，一共只有 4 个取值，前 3 个带隐式序号：

| 取值 | 数值 | 含义 |
|------|------|------|
| `None` | `-1` | 本次不显示过错（潜行模式关闭、或该 agent 看不到玩家） |
| `Default` | `0` | 在视野内但没有构成过错（对应 `StealthOffenseTypes.None`） |
| `Visible` | `1` | 玩家被该 agent 目击，但尚未升级为「被怀疑」 |
| `Suspicious` | `2` | 玩家被怀疑：或因为在私人区域，或因为目击后又触发了怀疑 |

它唯一的存储位置是 VM 的私有字段 `_offenseType`（`MissionDisguiseMarkerItemVM.cs:33`）。真正对外可见的不是枚举本身，而是由它 `ToString()` 得到的字符串属性 `OffenseTypeIdentifier`（`MissionDisguiseMarkerItemVM.cs:113`）。也就是说：**枚举是内部编码，字符串才是 UI 契约**。

注意它和同一文件里的兄弟枚举 `AgentAlarmStateEnum`（`MissionDisguiseMarkerItemVM.cs:11`）是**两条独立的轴**：那个描述「这个敌人有多警戒」，这个描述「玩家在这个敌人眼里犯了什么错」。两者都会出现在同一个伪装标记上，但互不驱动。

## 心智模型

把伪装任务里的每个「敌方标记」想成一盏双色指示灯：**上面的灯是警戒档位（`AgentAlarmStateEnum`），下面的灯是过错类型（本枚举）**。本页只管下面那盏。

**谁产生它——三段接力，最后一段是本枚举。**

第一段在模拟侧。`DisguiseMissionLogic` 每帧遍历它的 `_officerAgents` 与 `_defaultDisguiseAgents`，给每个 agent 算一个 `StealthOffenseTypes`：初始 `None`（`DisguiseMissionLogic.cs:1104`），若能看见玩家就升级为 `IsVisible`（`DisguiseMissionLogic.cs:1109`），若玩家还在该 agent 的私人区域里就覆盖为 `IsInPersonalZone`（`DisguiseMissionLogic.cs:1115`；默认伪装 agent 走同一逻辑，见 `DisguiseMissionLogic.cs:1124`、`DisguiseMissionLogic.cs:1128`、`DisguiseMissionLogic.cs:1134`）。结果通过 `ShadowingAgentOffenseInfo.SetOffenseType`（`DisguiseMissionLogic.cs:50`）写回 `OffenseInfo.OffenseType`（`DisguiseMissionLogic.cs:37`）。

第二段在 VM 侧。视图每帧先刷新四个上下文布尔——`IsInVision`（`GauntletMainAgentDetectionView.cs:153`）、`IsInVisibilityRange`（`GauntletMainAgentDetectionView.cs:154`）、`IsStealthModeEnabled`（`GauntletMainAgentDetectionView.cs:155`）、`IsSuspicious`（`GauntletMainAgentDetectionView.cs:156`）——然后调用 `RefreshVisuals()`（`GauntletMainAgentDetectionView.cs:164`）。`RefreshVisuals()`（`MissionDisguiseMarkerItemVM.cs:220`）在 `MissionDisguiseMarkerItemVM.cs:222` 把 `OffenseInfo.OffenseType` 交给 `GetOffenseTypeIdentifier`（`MissionDisguiseMarkerItemVM.cs:282`）。

第三段就是 `GetOffenseTypeIdentifier` 本身，它是本枚举唯一的写入者，分两步：

1. **门（gate）**：`IsStealthModeEnabled || !IsInVision || !IsInVisibilityRange` 任一成立就直接落 `None` 并提前返回（`MissionDisguiseMarkerItemVM.cs:284`、`MissionDisguiseMarkerItemVM.cs:286`）。也就是说潜行模式没开、或者这个 agent 根本看不到玩家时，过错轴一律熄灭——**这解释了为什么 `None` 不是 0 而是一个显式的 `-1`「无效态」**。
2. **映射（switch）**：过门之后按 `StealthOffenseTypes` 分派——`None → Default`（`MissionDisguiseMarkerItemVM.cs:291`、`MissionDisguiseMarkerItemVM.cs:292`），`IsVisible → IsSuspicious ? Suspicious : Visible`（`MissionDisguiseMarkerItemVM.cs:294`、`MissionDisguiseMarkerItemVM.cs:295`），`IsInPersonalZone → Suspicious`（`MissionDisguiseMarkerItemVM.cs:297`、`MissionDisguiseMarkerItemVM.cs:298`）。

**谁读它——Gauntlet 刷子按字符串切状态。** 字符串经 `OffenseTypeIdentifier` 数据绑定到 prefab，最终由两个刷子消费：`DisguiseMarkerBrushWidget.UpdateState()` 直接 `SetState(OffenseTypeIdentifier)`（`DisguiseMarkerBrushWidget.cs:44`）；`DisguiseMarkerAlternativeBrushWidget.OnLateUpdate` 在非空时对发光子控件调 `BackgroundGlowWidget?.SetState(OffenseTypeIdentifier)`（`DisguiseMarkerAlternativeBrushWidget.cs:92`）。所以这四个成员名必须能在刷子的样式表里找到同名 state，否则就是「切了个不存在的状态」，UI 静默不变。

**为什么是四个值而不是布尔。** 因为过错是分级的：`Visible`（被看见）与 `Suspicious`（被怀疑）在 UI 上是两种不同的颜色/呼吸效果，而「潜行模式未激活」与「没被看见」又必须和「确实被看见但没过错」区分开，于是有了 `None` / `Default` / `Visible` / `Suspicious` 四档。

**调用时机。** 它是**每帧派生的中间量**，不是需要缓存或序列化的数据；宿主 VM 由 `GauntletMainAgentDetectionView` 在 `UpdateMarkers` 里创建（`GauntletMainAgentDetectionView.cs:137`）。

## 怎么用

### 怎么拿到

- **源树路径：** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions.MainAgentDetection/MissionDisguiseMarkerItemVM.cs`（共 303 行）
- **声明处：** `MissionDisguiseMarkerItemVM.cs:21`（`public enum AgentStealthOffenseType`），取值在 `MissionDisguiseMarkerItemVM.cs:23`–`MissionDisguiseMarkerItemVM.cs:26`。
- **入口：** 没有任何公开 API 返回这个枚举。你只能通过 `MissionDisguiseMarkerItemVM` 实例的字符串属性 `OffenseTypeIdentifier`（`MissionDisguiseMarkerItemVM.cs:113`）间接观察它。拿 VM 的路径有两条：从数据源 `MissionDisguiseMarkersVM.HostileAgents`（`MissionDisguiseMarkersVM.cs:29`，在构造时初始化，见 `MissionDisguiseMarkersVM.cs:47`）取列表；或从 `GauntletMainAgentDetectionView` 的创建点（`GauntletMainAgentDetectionView.cs:137`）追进去。
- **跨类型写引用时：** 因为它是嵌套类型，C# 里必须写成 `MissionDisguiseMarkerItemVM.AgentStealthOffenseType.Visible`，不能写成顶层 `AgentStealthOffenseType`。

### 典型用法

- **判断玩家是否被某个敌人「目击但未怀疑」：** 把 `marker.OffenseTypeIdentifier` 与 `MissionDisguiseMarkerItemVM.AgentStealthOffenseType.Visible.ToString()` 比较。
- **判断是否被怀疑：** 同样比较 `Suspicious` 的字符串形式。注意 `IsInPersonalZone` 与「目击后被怀疑」都会落到这个值，字符串层面无法区分二者，要区分就得自己读 `OffenseInfo.OffenseType`。
- **自己复刻这套判定：** 照抄 `GetOffenseTypeIdentifier`（`MissionDisguiseMarkerItemVM.cs:282`）的三段结构——先过 `IsStealthModeEnabled / IsInVision / IsInVisibilityRange` 门，再 switch `StealthOffenseTypes`，最后用 `IsSuspicious` 做升级——但把输出的字符串换成你自己的资源名。
- **做调试 HUD：** 直接打印 `marker.OffenseTypeIdentifier` 即可，不需要碰枚举；枚举值不对外暴露。
- **判断「这一帧过错轴是否熄灭」：** 比较 `None`，而不是比较空串——属性永远不会是空串，门不通过时写的是 `None.ToString()`（`MissionDisguiseMarkerItemVM.cs:286`）。

### 坑

- **`None = -1`，所以 `default(AgentStealthOffenseType)` 是 `Default`（0）而不是 `None`。** 任何未初始化的字段、`new AgentStealthOffenseType()` 都会被读成 `Default`。这一点和兄弟枚举 `AgentAlarmStateEnum` 正好相反（那边默认落在 `Alarmed`，见 `MissionDisguiseMarkerItemVM.cs:14`），两页对照着看最容易记混。
- **`Default` 不是「默认值」的意思。** 它是「过门了、但没有构成过错」的那一桶，由 `StealthOffenseTypes.None` 映射而来（`MissionDisguiseMarkerItemVM.cs:291`–`MissionDisguiseMarkerItemVM.cs:292`）。把它理解成「Normal / 无过错」比理解成「默认」准确得多。
- **它是嵌套私有语义，没有公开读写口。** 枚举本身是 `public`，但它只存在于 VM 的私有字段里，外部唯一能读的是字符串。不要试图在 mod 里 new 一个然后塞回去。
- **字符串耦合。** UI 通过 `ToString()` 的结果匹配刷子 state，一旦枚举成员改名，prefab 侧的 state 匹配就会失效。要做本地化或资源名映射，请自己维护一张 `枚举 → 资源 id` 表，不要把成员名直接当资源名用。
- **别和 `AgentAlarmStateEnum` 的 `Suspicious` / `Visible` 混淆。** 同文件 `AgentAlarmStateEnum` 里也有名为 `Suspicious`（`MissionDisguiseMarkerItemVM.cs:17`）和 `Visible`（`MissionDisguiseMarkerItemVM.cs:18`）的成员，但那两个值是**死取值**——全源码搜索 `AgentAlarmStateEnum` 只在该文件命中，而 `UpdateAlarmState()` 只会写出 `Alarmed` / `Cautious` / `PatrollingCautious` / `None`（`MissionDisguiseMarkerItemVM.cs:263`、`MissionDisguiseMarkerItemVM.cs:267`、`MissionDisguiseMarkerItemVM.cs:271`、`MissionDisguiseMarkerItemVM.cs:275`）。所以 `AlarmState` 永远不会等于 `"Suspicious"` 或 `"Visible"`，而本枚举的 `Suspicious` / `Visible` 是**会**被赋值的。grep `"Suspicious"` 时命中的是本页这条链路。
- **`IsSuspicious` 的升级只作用于 `IsVisible` 分支。** `IsInPersonalZone` 无论 `IsSuspicious` 真假都直接落 `Suspicious`（`MissionDisguiseMarkerItemVM.cs:297`–`MissionDisguiseMarkerItemVM.cs:298`），不要以为所有 `Suspicious` 都经过了怀疑判定。
- **它是每帧派生的。** 四个上下文布尔由视图每帧先写（`GauntletMainAgentDetectionView.cs:153`–`GauntletMainAgentDetectionView.cs:156`），再调 `RefreshVisuals()`（`GauntletMainAgentDetectionView.cs:164`）。不要缓存 `OffenseTypeIdentifier` 跨帧使用，也不要试图序列化它。

## 关键成员

### `None = -1`（`MissionDisguiseMarkerItemVM.cs:23`）
「过错轴熄灭」档位。由门条件写入：潜行模式未开启、或该 agent 不在玩家视野内、或超出可见距离（`MissionDisguiseMarkerItemVM.cs:284`、`MissionDisguiseMarkerItemVM.cs:286`）。它是 `-1` 而不是 `0`，所以默认值反而落在 `Default`。

### `Default`（`MissionDisguiseMarkerItemVM.cs:24`）
「过门但无过错」档位。当 `StealthOffenseTypes.None` 时写入（`MissionDisguiseMarkerItemVM.cs:291`、`MissionDisguiseMarkerItemVM.cs:292`）。语义接近「正常 / 无异常」，不是「默认值」。

### `Visible`（`MissionDisguiseMarkerItemVM.cs:25`）
「玩家被目击、但未升级为怀疑」档位。当 `StealthOffenseTypes.IsVisible` 且 `IsSuspicious == false` 时写入（`MissionDisguiseMarkerItemVM.cs:294`、`MissionDisguiseMarkerItemVM.cs:295`）。

### `Suspicious`（`MissionDisguiseMarkerItemVM.cs:26`）
「玩家被怀疑」档位。两个来源：一是 `IsVisible` 且 `IsSuspicious == true`（`MissionDisguiseMarkerItemVM.cs:295`），二是玩家处在 agent 的私人区域内即 `StealthOffenseTypes.IsInPersonalZone`（`MissionDisguiseMarkerItemVM.cs:297`、`MissionDisguiseMarkerItemVM.cs:298`）。字符串层面无法区分这两个来源。

### `_offenseType`（`MissionDisguiseMarkerItemVM.cs:33`）
私有字段，本枚举在运行时的**唯一落点**。每次 `GetOffenseTypeIdentifier` 调用都会覆写它，然后立刻 `ToString()` 出去。

### `OffenseTypeIdentifier`（`MissionDisguiseMarkerItemVM.cs:113`）
对外可见的字符串属性，带 `[DataSourceProperty]`。它才是 UI 实际消费的契约，赋值点是 `MissionDisguiseMarkerItemVM.cs:222`。值域就是上述四个成员名的字符串形式。

### `GetOffenseTypeIdentifier`（`MissionDisguiseMarkerItemVM.cs:282`）
本枚举**唯一的写入者**。输入是 `StealthOffenseTypes`，输出是 `_offenseType.ToString()`（`MissionDisguiseMarkerItemVM.cs:301`）。先过门（`MissionDisguiseMarkerItemVM.cs:284`），再 switch（`MissionDisguiseMarkerItemVM.cs:289`）。

### 兄弟枚举 `AgentAlarmStateEnum`（`MissionDisguiseMarkerItemVM.cs:11`）
同一个宿主 VM 上的另一条轴（警戒档位），由 `UpdateAlarmState()`（`MissionDisguiseMarkerItemVM.cs:250`）写入、经 `AlarmState` 字符串输出。与本枚举无数据依赖，只在 UI 上共存。

## 真实示例

下面的片段演示如何在自定义 Gauntlet 面板或调试输出里读取过错类型。所有比较都走字符串，因为枚举值不对外暴露：

```csharp
using SandBox.ViewModelCollection.Missions.MainAgentDetection;
using TaleWorlds.Library;

// markers 是 MissionDisguiseMarkersVM 实例（数据源上的 HostileAgents 列表）
foreach (MissionDisguiseMarkerItemVM marker in markers.HostileAgents)
{
    // 枚举成员是嵌套的，比较时用 ToString() 拿 UI 契约值
    string suspicious = MissionDisguiseMarkerItemVM.AgentStealthOffenseType.Suspicious.ToString();
    string visible = MissionDisguiseMarkerItemVM.AgentStealthOffenseType.Visible.ToString();
    string none = MissionDisguiseMarkerItemVM.AgentStealthOffenseType.None.ToString();

    if (marker.OffenseTypeIdentifier == suspicious)
    {
        InformationManager.DisplayMessage(new InformationMessage("玩家已被怀疑"));
    }
    else if (marker.OffenseTypeIdentifier == visible)
    {
        // 只是被目击，还没升级为怀疑
    }
    else if (marker.OffenseTypeIdentifier == none)
    {
        // 潜行模式未开、或该敌人看不到玩家：过错轴熄灭
    }
}
```

如果你想在**生产者一侧**（`DisguiseMissionLogic`）对齐语义，可以这样对照 `StealthOffenseTypes` 到本枚举的映射：

```csharp
// 生产者一侧：DisguiseMissionLogic 每帧往 ShadowingAgentOffenseInfo 写 StealthOffenseTypes
//   StealthOffenseTypes.None            → 消费端 Default
//   StealthOffenseTypes.IsVisible       → 消费端 Visible（IsSuspicious 时升级为 Suspicious）
//   StealthOffenseTypes.IsInPersonalZone→ 消费端 Suspicious（无条件）
StealthOffenseTypes offenseType = StealthOffenseTypes.None;
ShadowingAgentOffenseInfo info = logic.GetAgentOffenseInfo(agent);
if (info != null)
{
    info.SetOffenseType(offenseType);
    // 之后由 MissionDisguiseMarkerItemVM.RefreshVisuals() 翻译成字符串
}
```

自己复刻这套判定时，注意门的三个条件必须和原实现一致，否则会出现「UI 亮着但玩家其实看不见敌人」的假信号：

```csharp
// 复刻 GetOffenseTypeIdentifier 的门 + 映射（用你自己的资源名替换 ToString 输出）
private string MyOffenseTag(bool stealthOn, bool inVision, bool inRange, bool suspicious, StealthOffenseTypes offense)
{
    if (stealthOn || !inVision || !inRange)
    {
        return "None"; // 过错轴熄灭
    }
    switch (offense)
    {
        case StealthOffenseTypes.None:
            return "Default";
        case StealthOffenseTypes.IsVisible:
            return suspicious ? "Suspicious" : "Visible";
        case StealthOffenseTypes.IsInPersonalZone:
            return "Suspicious"; // 无视 suspicious 布尔
        default:
            return "None";
    }
}
```

## 参见

- [MissionDisguiseMarkerItemVM](../MissionDisguiseMarkerItemVM) — 宿主类，本枚举嵌在它内部，`OffenseTypeIdentifier` 与 `GetOffenseTypeIdentifier` 都在这里
- [AgentAlarmStateEnum](../AgentAlarmStateEnum) — 同文件兄弟枚举，另一条轴（警戒档位），取值名重叠但语义不同，最易混淆
- [StealthOffenseTypes](../StealthOffenseTypes) — 模拟侧的上游枚举，`GetOffenseTypeIdentifier` 的输入
- [DisguiseMissionLogic](../DisguiseMissionLogic) — 上游生产者，每帧写出 `ShadowingAgentOffenseInfo.OffenseType`
- [MissionDisguiseMarkersVM](../MissionDisguiseMarkersVM) — 承载 `HostileAgents` 列表的数据源，取 VM 实例的入口
- [GauntletMainAgentDetectionView](../GauntletMainAgentDetectionView) — 视图侧，每帧写上下文布尔并调用 `RefreshVisuals()`
- [DisguiseMarkerBrushWidget](../../mission-ext/DisguiseMarkerBrushWidget) — 字符串的最终消费者之一，`SetState(OffenseTypeIdentifier)`
- [Agent](../../mission/Agent) — 被观察对象，`OffenseInfo.Agent` 指向它

## 导航

- [本区域目录](../)
- **父级：** [MissionDisguiseMarkerItemVM](../MissionDisguiseMarkerItemVM)
- **同级：** [AgentAlarmStateEnum](../AgentAlarmStateEnum) · [StealthOffenseTypes](../StealthOffenseTypes)
- **上游：** [DisguiseMissionLogic](../DisguiseMissionLogic) · **下游：** [DisguiseMarkerBrushWidget](../../mission-ext/DisguiseMarkerBrushWidget)
