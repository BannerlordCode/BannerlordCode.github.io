---
title: "IMBMission"
description: "Mission 的 116 个原生绑定：42 个 get_ 里 39 个在 Mission.cs 有真实读取调用，3 个无包装；调用点还散在 MissionRecorder 与 MBMissile 里。"
---

# IMBMission

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `internal interface IMBMission`（`[ScriptingInterfaceBase]`）
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/IMBMission.cs`

## 概述

`IMBMission` 是 359 行、**116 个 `[EngineMethod]` 绑定**的纯声明接口——**零方法体**，实现落在 `Bannerlord.Native.dll`（**不在源码树**）。它带 `[ScriptingInterfaceBase]`（`:9`），是 28 个可脚本化 IMB* 接口之一。

它和 [IMBAgent](../IMBAgent/) 的关键差别在**调用点分布**：`IMBAgent` 的调用 91/93 集中在 `Agent.cs`，而 `IMBMission` 的 39 个 `get_` 调用点里 `Mission.cs` 只占 33 次，**另有 5 次在 `MissionRecorder.cs`、4 次在 `MBMissile.cs`**。**所以「改 Mission 的什么会走到这个接口」的答案不只在 `Mission.cs` 里。**

## 心智模型

把它当成**「Mission 的原生控制面」**。三条推论：

第一,**116 个绑定里 110 个在托管侧有真实调用点，6 个没有。** 我实测 `grep -rn "MBAPI.IMBMission\." --include=*.cs bannerlord-1.4.5` → **110 个不同方法名被调用**；按形态分是 `set_` 18/18 全有、`动词` 53/56、`get_` 39/42。

第二,**这个接口身上有两套并行机制。** 一边是普通命令（`ClearResources` `:12`、`CreateMission` `:15`、`ForceDisableOcclusion` `:21`、`TickAgentsAndTeamsAsync` `:24`），另一边是**录制/回放**（`ProcessRecordUntilTime`、`RecordCurrentState`、`RestoreRecordFromFile`、`StartRecording`、`BackupRecordToFile`、`EndOfRecord`、`RestartRecord`、`SkipForwardMissionReplay`）——后一组的存在正是 `MissionRecorder.cs` 贡献 5 次调用的原因。

第三,**`CreateMission` 的形参方向与其他绑定相反。** `:16` 是 `UIntPtr CreateMission(Mission mission)` —— **唯一一个以托管对象为首参、返回原生指针的绑定**，因为它是「创建」而不是「操作」。

## 如何使用

**怎么拿到它**：`MBAPI.GetObject<IMBMission>()`（`MBAPI.cs:70-77`，按类型全名查字典）。**编译期 mod 拿不到** `IMBMission` 与 `MBAPI.IMBMission` 这两个符号。

复现调用点分布（这是本页结论的来源）：

```csharp
using System;
using System.Linq;
using System.Reflection;
using TaleWorlds.MountAndBlade;

// IMBMission.cs 共 116 个 [EngineMethod] 绑定 = get_ 42 / set_ 18 / 动词 56
// 110 个在托管侧有调用点；39 个 get_ 的调用点分布：
//   Mission.cs          33 次
//   MissionRecorder.cs   5 次
//   MBMissile.cs         4 次
// 对照 IMBAgent：91/93 集中在 Agent.cs
Debug.Print("IMBMission 的调用点比 IMBAgent 分散 —— 三个文件，不是一个", 0);
```

**用它最容易踩的一条**：**`get_tick_debug_paused`（`:28`）、`get_time`（`:73`）、`get_average_morale_of_agents`（`:271`）这三个绑定在托管侧完全没有包装。** 而 `get_combat_type`（`:79`）**有**包装、就在 `Mission.cs:1173`（紧接着 `set_combat_type` 的包装在 `:1177`）—— **所以「这个 `get_` 能不能从托管侧读到」不是绑定属性，是每个绑定各自的情况。** 顺带一提，这三个无包装的还**形态各异**：`:28` 是单参 getter，`:73` 返回 `float`，而 `:271` 是 `float GetAverageMoraleOfAgents(UIntPtr, int agentCount, int[] agentIndices)` —— **一次算一组 Agent 的平均士气，不遵守「`get_` = 读单个 Agent 字段」这个惯例。** 与 [IMBAgent](../IMBAgent/) 一样：**`get_` 前缀只反映原生侧命名，不反映托管侧有没有入口。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `[ScriptingInterfaceBase]` | `IMBMission.cs:9` | 标记为「可脚本化」——**这 116 个绑定就是脚本层能看到的全部**，见 [ScriptingInterfaceBase](../ScriptingInterfaceBase/)。 |
| 116 个 `[EngineMethod]` 绑定 | `[EngineMethod("native_name", false, null, false)]` + 方法签名 | `get_` 42 / `set_` 18 / 动词名 56。**110 个有托管调用点，6 个没有。** 第一参数是原生方法名字符串。 |
| 39 个【有】托管读取调用的 `get_` | 形如 `bool GetCombatType(UIntPtr)`（`:79`） | **正面清单。** 样例：`GetPauseAITick`（`:40` → `Mission.cs:1189`）、`GetClearSceneTimerElapsedTime`（`:46` → `Mission.cs:1231`）、`GetCameraFrame`（`:58` → `Mission.cs:2006`）、`GetIsLoadingFinished`（`:61` → `Mission.cs:1197`）、`GetAverageFps`（`:76` → `Mission.cs:1648`）、`GetCombatType`（`:79` → `Mission.cs:1173`）、`GetNumberOfTeams`（`:94` → `Mission.cs:719`）。 |
| `GetTickDebugPaused` | `[EngineMethod("get_tick_debug_paused", …)] bool GetTickDebugPaused(UIntPtr)`（`:28`） | **托管侧零包装。** 名字里的 `debug` 与「无人调用」一致，但**我不断言它是否被 native 侧或调试工具使用**。 |
| `GetTime` | `[EngineMethod("get_time", …)] … GetTime(UIntPtr)`（`:73`） | **托管侧零包装。** 注意 `Mission` 上有 `MissionTime`、`Mission.Current.Time` 等多个时间概念，**但我确认它们都不经这个绑定** —— 我不断言它们各自怎么取时间。 |
| `GetAverageMoraleOfAgents` | `[EngineMethod("get_average_morale_of_agents", …)] float GetAverageMoraleOfAgents(UIntPtr missionPointer, int agentCount, int[] agentIndices)`（`:271`） | **托管侧零包装，而且它是【批量】查询。** 与其余 `get_` 不同，它除指针外还要 `int agentCount` 与 `int[] agentIndices` —— **即一次算一组 Agent 的平均士气，而不是单个 Agent 的属性。** 所以它不遵守「`get_` = 读一个 Agent 字段」这个惯例。 |
| `CreateMission` | `[EngineMethod("create_mission", …)] UIntPtr CreateMission(Mission mission)`（`:15-16`） | **245/116 个绑定里唯一「以托管对象为首参、返回原生指针」的一个**（对照其余首参几乎都是 `UIntPtr`）。**它是「创建」而非「操作」—— 因为方向相反：操作是「拿指针去问」，创建是「拿对象换指针」。** |
| 录制/回放组 | `RecordCurrentState`、`ProcessRecordUntilTime`、`RestoreRecordFromFile`、`StartRecording`、`BackupRecordToFile`、`EndOfRecord`、`RestartRecord`、`SkipForwardMissionReplay` 等 | **这组的存在是 `MissionRecorder.cs` 贡献 5 次调用的原因。** 它们把整个 `Mission` 的状态序列化/反序列化，**所以「回放与实时」走的是同一套接口**。**我未逐个列出它们的行号**，故不断言各自细节。 |

## 真实示例

39 个 `get_` 的调用点分布（这是本页的核心结论）：

```csharp
// 39 个有托管调用点的 get_，按文件：
//   Mission.cs           33 次   —— 主力
//   MissionRecorder.cs    5 次   —— 录制/回放路径
//   MBMissile.cs          4 次   —— 导弹逻辑路径（见下）
// 无调用点的 3 个：GetTickDebugPaused(:28) / GetTime(:73) / GetAverageMoraleOfAgents(:271)
// 对照 IMBAgent 的分布：Agent.cs 91 次 / DefaultBattleMissionAgentSpawnLogic.cs 1 次 / SpawningBehaviorBase.cs 1 次
Debug.Print("IMBMission 跨 3 个文件；IMBAgent 91/93 集中在 1 个文件", 0);
```

`CreateMission` 与其余绑定的方向差异：

```csharp
// IMBMission.cs:16  UIntPtr CreateMission(Mission mission);     ← 托管对象进、原生指针出
// IMBMission.cs:13  void ClearResources(UIntPtr missionPointer); ← 原生指针进
// IMBMission.cs:19  void SetCloseProximityWaveSoundsEnabled(UIntPtr missionPointer, bool value);
// ⇒ 116 个绑定里只有 CreateMission 一个是「反方向」
Debug.Print("CreateMission 是唯一的反向绑定", 0);
```

动词类 56 个里的录制/回放子集（按名字分类，非逐个查证）：

```csharp
// 动词组（无 get_/set_ 前缀）共 56 个，其中与录制/回放同义的：
//   ClearResources(:12) / CreateMission(:15) / ForceDisableOcclusion(:21) /
//   TickAgentsAndTeamsAsync(:24) / ClearAgentActions / ClearMissiles / ClearCorpses /
//   ResetFirstThirdPersonView / StartRecording / RecordCurrentState / EndOfRecord /
//   ProcessRecordUntilTime / RestoreRecordFromFile / BackupRecordToFile /
//   RestartRecord / SkipForwardMissionReplay / ProcessRecordUntilTime
// 这批就是 MissionRecorder.cs 会去调的部分
Debug.Print("动词组里含完整的录制/回放子集", 0);
```

## 风险与边界

- **`internal interface`，编译期不可引用。** 实现全在 `Bannerlord.Native.dll`，**不在源码树**。**所以本页没有一条断言来自原生实现。**
- **三个无包装的 `get_` 形态各异。** `:28` 是单参 getter；`:73` 是 `float GetTime(UIntPtr)`；`:271` 是**三参批量查询**（指针 + `agentCount` + `agentIndices[]`）。**所以「无包装」不代表它们是同一种东西。**
- **调用点跨 3 个文件。** `Mission.cs` / `MissionRecorder.cs` / `MBMissile.cs`。**只看 `Mission.cs` 会漏掉 9 个调用点。**
- **`get_time` 与 `Mission` 的时间概念不是一回事。** 我只确认了没有托管包装，**不断言 `Mission.Time` 之类怎么取值**。
- **`CreateMission` 的方向相反。** `:16`。**把它当成「操作类绑定」去理解会错。**
- **动词组里混着「普通命令」与「录制/回放」两类。** 我按名字归类，**未逐个查证其语义**，故不断言。
- **那 3 个无调用点的动词绑定我未逐个说明。** 110/116 的覆盖里，6 个无调用点中我归因了 3 个 `get_`，**其余 3 个（动词类）我列了名单未查**，故不断言。
- **录制/回放组我没有逐个行号。** 见「关键成员」最后一行。

## 参见

- 标记它可脚本化的特性：[ScriptingInterfaceBase](../ScriptingInterfaceBase/)（28 个 IMB* 接口之一）
- 托管侧消费方：[Mission](../Mission/)（33 次 `get_` 调用点）、`MissionRecorder`（5 次）、`MBMissile`（4 次）
- 兄弟接口：[IMBAgent](../IMBAgent/)（245 个绑定，调用点 91/93 集中在 `Agent.cs`）
- 跨语言取实例：`MBAPI.cs:70-77`（`GetObject<T>` 按类型全名查字典）、`:82-84`
- 同桶：[ScriptingInterfaceBase](../ScriptingInterfaceBase/)、[AgentHelper](../AgentHelper/)、[ProximityMapSearchStructInternal](../ProximityMapSearchStructInternal/)（`CanSearchRadius` 读的是 `Mission.ProximityMapMaxSearchRadius`）、[DefineGameNetworkMessageType](../DefineGameNetworkMessageType/)、[DefineSynchedMissionObjectType](../DefineSynchedMissionObjectType/)
- 桶首页：[mission API 分区](../)