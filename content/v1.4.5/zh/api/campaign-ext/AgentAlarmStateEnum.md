---
title: "AgentAlarmStateEnum"
description: "潜行/伪装任务里敌方标记的警戒档位枚举，嵌在 MissionDisguiseMarkerItemVM 内部，把 Agent 的 AIStateFlag 位翻译成 UI 可直接显示的档位名，共 6 个取值（None/Alarmed/Cautious/PatrollingCautious/Suspicious/Visible）。"
---
# AgentAlarmStateEnum

**命名空间：** `SandBox.ViewModelCollection.Missions.MainAgentDetection`  
**模块：** `SandBox.ViewModelCollection`  
**类型：** `public enum AgentAlarmStateEnum`  
**源文件：** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions.MainAgentDetection/MissionDisguiseMarkerItemVM.cs`（303 行）

## 概述

`AgentAlarmStateEnum` 是 `MissionDisguiseMarkerItemVM` 的**内部嵌套枚举**，不是独立文件里的类型。它一共 6 个取值，前 5 个显式或隐式带序号：

| 取值 | 数值 | 含义 |
|------|------|------|
| `None` | `-1` | 无警戒，敌人处于常态 |
| `Alarmed` | `0` | 完全警戒，已发现玩家 |
| `Cautious` | `1` | 警惕，处于戒备但未确认 |
| `PatrollingCautious` | `2` | 巡逻式警惕（移动中保持戒备） |
| `Suspicious` | `3` | 怀疑（本文件内**从未被赋值**，见下文） |
| `Visible` | `4` | 已看见（本文件内**从未被赋值**，见下文） |

它唯一的存储位置是 VM 的私有字段 `_activeAlarmState`（`MissionDisguiseMarkerItemVM.cs:31`）。真正对外可见的不是枚举本身，而是由它 `ToString()` 得到的字符串属性 `AlarmState`（`MissionDisguiseMarkerItemVM.cs:96`）。也就是说：**枚举是内部编码，字符串才是 UI 契约**。

## 心智模型

把它理解成**伪装/潜行任务中「敌方标记」上的一个警戒档位灯**，而不是一个可以随便构造和传递的数据类型。

1. **它属于谁**——它是 `MissionDisguiseMarkerItemVM` 的私有显示状态。宿主 VM 的职责是「把某个敌方 agent 的威胁信息画到屏幕上」，警戒档位是这个绘制过程的一个中间量。因为没有任何其他类型消费它，所以它被嵌在 VM 内部而不是放到命名空间顶层，避免污染 `SandBox.ViewModelCollection.Missions.MainAgentDetection` 的公共类型面。
2. **谁产生它**——唯一的产生点是 `MissionDisguiseMarkerItemVM.UpdateAlarmState()`（`MissionDisguiseMarkerItemVM.cs:250`）。它先通过 `CampaignAgentComponent.AgentNavigator.GetBehaviorGroup<AlarmedBehaviorGroup>()`（`MissionDisguiseMarkerItemVM.cs:259`）拿到该 agent 的警戒行为组，再读取 `agent.AIStateFlags` 的位，按 `3 → Alarmed`、`1 → Cautious`、`2 → PatrollingCautious`、否则 `None` 的顺序落到 `_activeAlarmState`（`MissionDisguiseMarkerItemVM.cs:263`、`:267`、`:271`、`:275`）。这些 `AIStateFlag` 位本身由 `AlarmedBehaviorGroup` 在模拟中写入（例如 `AlarmedBehaviorGroup.cs:290` 写 `3`、`:296` 写 `2`、`:258` 写 `1`）。
3. **谁读它**——本文件里只有 `UpdateAlarmState()` 末尾的 `AlarmState = _activeAlarmState.ToString()`（`MissionDisguiseMarkerItemVM.cs:278`）。字符串经 `[DataSourceProperty]` 暴露给 Gauntlet，prefab 用文本匹配来决定显示哪条警戒提示。同一处还把 `AlarmedBehaviorGroup.AlarmFactor` 归一化成 `AlarmProgress`（`MissionDisguiseMarkerItemVM.cs:279`），那是 0–100 的进度条数值。
4. **为什么是「档位」而不是「布尔」**——因为警戒是渐进的：`AlarmedBehaviorGroup.AlarmFactor` 是连续量，而 UI 需要离散档位来切换图标/文案。本枚举就是这个离散化的产物；`AlarmProgress` 保留连续量用于进度条。
5. **调用时机**——宿主 VM 由 `GauntletMainAgentDetectionView` 在 `UpdateMarkers` 中创建与刷新（`GauntletMainAgentDetectionView.cs:137`、`:164` 调用 `RefreshVisuals`），而 `RefreshVisuals()`（`MissionDisguiseMarkerItemVM.cs:220`）内部再调用 `UpdateAlarmState()`（`MissionDisguiseMarkerItemVM.cs:223`）。所以它是**每帧刷新的派生状态**，不是需要缓存或序列化的数据。

## 怎么用

### 怎么拿到

- **源树路径：** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions.MainAgentDetection/MissionDisguiseMarkerItemVM.cs`（共 303 行）
- **声明处：** `MissionDisguiseMarkerItemVM.cs:11`（`public enum AgentAlarmStateEnum`），取值在 `:13`–`:18`。
- **入口：** 没有任何公开 API 直接返回枚举值。你只能通过 `MissionDisguiseMarkerItemVM` 实例的字符串属性 `AlarmState`（`MissionDisguiseMarkerItemVM.cs:96`）间接观察它。拿 VM 的路径是从 Gauntlet 视图的数据源取 `HostileAgents` 列表（创建点见 `GauntletMainAgentDetectionView.cs:137`），或从 `MissionDisguiseMarkersVM.HostileAgents` 取。
- **跨类型写引用时**：因为它是嵌套类型，C# 里必须写成 `MissionDisguiseMarkerItemVM.AgentAlarmStateEnum.Alarmed`，不能写成顶层 `AgentAlarmStateEnum`。

### 典型用法

- **判断某个敌方是否已完全警戒**：把 `marker.AlarmState` 与 `MissionDisguiseMarkerItemVM.AgentAlarmStateEnum.Alarmed.ToString()` 比较。
- **区分「警惕」与「巡逻警惕」**：两者在 UI 上是不同档位，但都源自 `AIStateFlag` 的不同位；用字符串比较即可，无需自己解析 flag。
- **读进度条数值**：配合 `marker.AlarmProgress`（`MissionDisguiseMarkerItemVM.cs:79`）做自定义 UI 的渐变。
- **做自己的标记系统**：如果你要复刻这套逻辑，照抄 `UpdateAlarmState()` 的「flag → 档位 → 字符串」三步，但把档位字符串换成你自己的资源名，不要依赖本枚举。

### 坑

- **`Suspicious` 与 `Visible` 是「声明了但没被赋值」的取值。** 全源码搜索 `AgentAlarmStateEnum` 只在该文件命中，而 `UpdateAlarmState()` 只会写出 `Alarmed`/`Cautious`/`PatrollingCautious`/`None`（`MissionDisguiseMarkerItemVM.cs:263`、`:267`、`:271`、`:275`）。所以 `AlarmState` 字符串永远不会等于 `"Suspicious"` 或 `"Visible"`。若你的 mod 靠这两个字符串分支，会永远走不到。
- **`None = -1` 而不是 `0`。** `default(AgentAlarmStateEnum)` 是 `0`，即 `Alarmed`，不是 `None`。任何 `new AgentAlarmStateEnum()` 或未初始化字段都会被读成「完全警戒」，这是最容易踩的反直觉点。
- **别和兄弟枚举 `AgentStealthOffenseType` 搞混。** 同一文件里 `MissionDisguiseMarkerItemVM.cs:21` 还有一个 `AgentStealthOffenseType`，它的取值也是 `None/Visible/Suspicious`，但它描述的是「玩家犯下的潜行过错类型」，和警戒档位是两条不同的轴（见 `GetOffenseTypeIdentifier`，`MissionDisguiseMarkerItemVM.cs:282`）。`Visible`/`Suspicious` 在那边**是会**被赋值的。
- **字符串耦合。** UI 通过 `ToString()` 的结果匹配文本，一旦枚举成员改名，prefab 侧的文案匹配就会失效。要做本地化/资源名映射，请自己维护一张 `枚举 → 资源 id` 表，不要直接用成员名当资源名。
- **它是每帧派生的。** 不要缓存 `AlarmState` 跨帧使用，也不要试图序列化它；它由 `RefreshVisuals()`（`MissionDisguiseMarkerItemVM.cs:220`）每帧重算。

## 关键成员

### None = -1（`:13`）
「无警戒」档位。由 `UpdateAlarmState()` 在 `AIStateFlags` 不含警戒位时写入（`MissionDisguiseMarkerItemVM.cs:275`）。注意它**不是** 0，所以默认值反而落在 `Alarmed`。

### Alarmed（`:14`）
「完全警戒」档位。当 `AIStateFlags` 命中位 `3` 时写入（`MissionDisguiseMarkerItemVM.cs:263`）。`AlarmedBehaviorGroup` 是位 `3` 的主要生产者之一（例如 `AlarmedBehaviorGroup.cs:290`）。此时 `AlarmProgress` 被强制为 `100`。

### Cautious（`:15`）
「警惕」档位。命中位 `1` 时写入（`MissionDisguiseMarkerItemVM.cs:267`）。对应 agent 戒备但尚未确认敌情，`AlarmedBehaviorGroup.cs:258` 是位 `1` 的写入点之一。

### PatrollingCautious（`:16`）
「巡逻式警惕」档位。命中位 `2` 时写入（`MissionDisguiseMarkerItemVM.cs:271`）。区别在于该 agent 仍在按巡逻路线移动，而不是原地戒备。

### Suspicious（`:17`）
「怀疑」档位。**本文件内没有任何赋值路径**，属于声明了但未使用的成员。同名取值出现在兄弟枚举 `AgentStealthOffenseType`（`MissionDisguiseMarkerItemVM.cs:26`）中且会被赋值，容易被误读成同一条链路。

### Visible（`:18`）
「已看见」档位。同样**本文件内没有任何赋值路径**。它在 `AgentStealthOffenseType`（`MissionDisguiseMarkerItemVM.cs:25`）里是「玩家在视野内被目击」的过错类型，和警戒档位不是一回事。

### `_activeAlarmState`（`:31`）
私有字段，本枚举在运行时的**唯一落点**。它的值每帧由 `UpdateAlarmState()` 覆写，随后被 `ToString()` 转成 `AlarmState` 字符串。

### `AlarmState`（`:96`）
对外可见的字符串属性，`[DataSourceProperty]`。它才是 UI 实际消费的契约，值域是上述档位名的字符串形式（赋值点 `MissionDisguiseMarkerItemVM.cs:278`）。

### `AlarmProgress`（`:79`）
0–100 的整数进度条数值（赋值点 `MissionDisguiseMarkerItemVM.cs:279`）。它来自 `AlarmedBehaviorGroup.AlarmFactor / 2f` 的归一化结果；命中位 `3` 时直接钳到 `1f`。

## 真实示例

下面的片段演示如何在自定义 Gauntlet 面板或调试输出里读取警戒档位。注意所有比较都走字符串，因为枚举值不对外暴露：

```csharp
using SandBox.ViewModelCollection.Missions.MainAgentDetection;
using TaleWorlds.Library;

// markers 是 MissionDisguiseMarkersVM 实例（数据源上的 HostileAgents 列表）
foreach (MissionDisguiseMarkerItemVM marker in markers.HostileAgents)
{
    // 枚举成员是嵌套的，比较时用 ToString() 拿 UI 契约值
    string alarmed = MissionDisguiseMarkerItemVM.AgentAlarmStateEnum.Alarmed.ToString();
    if (marker.AlarmState == alarmed)
    {
        InformationManager.DisplayMessage(new InformationMessage(
            $"目标已完全警戒（进度 {marker.AlarmProgress}%）"));
    }
    else if (marker.AlarmState == MissionDisguiseMarkerItemVM.AgentAlarmStateEnum.Cautious.ToString())
    {
        // 只是警惕，还没锁定玩家
    }
}
```

如果你想在 `AlarmedBehaviorGroup` 侧对齐档位语义（它才是 `AIStateFlag` 位的生产者），可以这样对照：

```csharp
// 生产者一侧：AlarmedBehaviorGroup 往 agent 上写 AIStateFlag
//   SetAlarmState((AIStateFlag)3) → 消费端 Alarmed
//   SetAlarmState((AIStateFlag)1) → 消费端 Cautious
//   SetAlarmState((AIStateFlag)2) → 消费端 PatrollingCautious
AlarmedBehaviorGroup group = agent
    .GetComponent<CampaignAgentComponent>()
    .AgentNavigator?
    .GetBehaviorGroup<AlarmedBehaviorGroup>();
float factor = group?.AlarmFactor ?? 0f;
```

## 参见

- [MissionDisguiseMarkerItemVM](../MissionDisguiseMarkerItemVM) — 宿主类，本枚举嵌在它内部并由它的 `UpdateAlarmState` 赋值
- [AlarmedBehaviorGroup](../AlarmedBehaviorGroup) — 警戒位与 `AlarmFactor` 的生产者，`AIStateFlag` 由此写入
- [MissionDisguiseMarkersVM](../MissionDisguiseMarkersVM) — 承载 `HostileAgents` 列表的数据源，取 VM 实例的入口
- [AgentStealthOffenseType](../AgentStealthOffenseType) — 同文件兄弟枚举，取值名重叠但语义不同，最易混淆
- [Agent](../../mission/Agent) — 被观察对象，`AIStateFlags` 的来源

## 导航

- [本区域目录](../)
- **父级：** [MissionDisguiseMarkerItemVM](../MissionDisguiseMarkerItemVM)
- **同级：** [AgentStealthOffenseType](../AgentStealthOffenseType) · [MissionDisguiseMarkersVM](../MissionDisguiseMarkersVM)
- **相关：** [AlarmedBehaviorGroup](../AlarmedBehaviorGroup) · [Agent](../../mission/Agent)
