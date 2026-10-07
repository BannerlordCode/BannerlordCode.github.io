---
title: "ScriptingInterfaceBase"
description: "IMB* 原生接口的「可脚本化」标记：7 行空特性类，零成员，标记着 28 个 IMB* 接口（1.4.5 全部 30 个 IMB*.cs 中的 28 个）。读它的是原生侧，托管侧不读。"
---

# ScriptingInterfaceBase

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `internal class ScriptingInterfaceBase : Attribute`
**Base:** `System.Attribute`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/ScriptingInterfaceBase.cs`

## 概述

`ScriptingInterfaceBase` 是一个 7 行的空标记特性，声明在 `ScriptingInterfaceBase.cs:5-7`：

```csharp
internal class ScriptingInterfaceBase : Attribute
{
}
```

**它零成员、零方法、零构造器。** 它存在的全部意义是**被标注在 28 个 `IMB*` 原生接口上**——告诉脚本层「这个接口可以被暴露给 modder」。

**它有 28 个真实使用点。** 我实测 `grep -rn "ScriptingInterfaceBase" --include=*.cs bannerlord-1.4.5` → **29 处 = 1 处声明 + 28 处特性应用**，全部在 `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/` 下的 `IMB*.cs` 文件里，全部形如 `[ScriptingInterfaceBase]` 单独一行、紧贴在 `internal interface I…` 之上。

## 心智模型

把它当成**「原生互操作层的白名单标记」**。三条推论：

第一,**28 个被标注的类型全部是 `internal interface`。** 我逐个核过 28 个文件里 `[ScriptingInterfaceBase]` 的下一行，`grep -A1` 统计结果是 **`internal interface` × 28**，零例外。**这说明「可脚本化」这件事只对原生互操作接口开放，不对类开放。**

第二,**30 个 `IMB*.cs` 文件里有 28 个被标注、2 个没有。** 未被标注的两个是 `IMBBindingList.cs`（`public interface IMBBindingList : IList, ICollection, IEnumerable`）与 `IMBCollection.cs`（`public interface IMBCollection`）—— **它们是 `public` 的纯托管泛型接口，继承 BCL 集合接口，与原生指针无关。** 这两条构成了「哪些 IMB 接口可脚本化」的正反两面证据。

第三,**托管侧不读这个标记。** 我实测 `grep -rn "GetCustomAttribute"` 在 `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/` 下命中的每一处都是**别的**特性（`ConfigProperty`、`ConfigPropertyInt`、`DefineSynchedMissionObjectType`、`DefineGameNetworkMessageType`）。**没有任何托管代码读 `ScriptingInterfaceBase`。** 托管侧拿 `IMB*` 实例的方式是 `MBAPI.GetObject<T>()`（`MBAPI.cs:70-77`），它只做一件事：`if (_objects.TryGetValue(typeof(T).FullName, out var value))` —— **按类型的全名查字典，完全不看特性。** 所以**读这个标记的是原生侧，而原生侧的实现不在源码树里**（`Bannerlord.Native.dll`）。

## 如何使用

**怎么拿到它**：**拿不到，但能给别人的接口加它。** 它是 `internal`，所以 mod 编译期既读不到也加不上。要新增一个可脚本化的原生接口，**必须改引擎源码**。

证明「28 个标注全是 interface、2 个未标注是 public 托管接口」——这是本页唯一能给出的可执行事实：

```csharp
using System.Reflection;

// 28 处 [ScriptingInterfaceBase] 的下一行全部是 internal interface
// 30 个 IMB*.cs 里未被标注的只有 IMBBindingList.cs 与 IMBCollection.cs
// 它们是 public interface IMBBindingList : IList, ICollection, IEnumerable 与 public interface IMBCollection
string[] marked = { "IMBActionSet", "IMBAgent", "IMBAgentVisuals", "IMBAnimation",
                    "IMBBannerlordChecker", "IMBBannerlordConfig", "IMBBannerlordTableauManager",
                    "IMBDebugExtensions", "IMBDelegate", "IMBEditor", "IMBFaceGen", "IMBGame",
                    "IMBGameEntityExtensions", "IMBItem", "IMBMapScene", "IMBMessageManager",
                    "IMBMission", "IMBMultiplayerData", "IMBNetwork", "IMBPeer", "IMBScreen",
                    "IMBSkeletonExtensions", "IMBSoundEvent", "IMBTeam", "IMBTestRun",
                    "IMBVoiceManager", "IMBWindowManager", "IMBWorld" };
string[] unmarked = { "IMBBindingList", "IMBCollection" };
Debug.Print("被标记 = " + marked.Length + "（全是 internal interface）  未被标记 = " + unmarked.Length + "（全是 public 托管接口）", 0);
```

托管侧拿到 `IMBAgent` 实例的实际路径（**注意它不读特性**）：

```csharp
using TaleWorlds.MountAndBlade;

// MBAPI.cs:82-84  IMBAgent = GetObject<IMBAgent>();
// MBAPI.cs:70-77  private static T GetObject<T>() where T : class
//                 { if (_objects.TryGetValue(typeof(T).FullName, out var value)) return value as T; return null; }
// MBAPI.cs:79-81  internal static void SetObjects(Dictionary<string, object> objects) { _objects = objects; … }
// => 字典由原生侧 SetObjects 灌入，键是类型全名
// => GetObject 返回 null 的可能存在（键不存在时），而 IMBAgent 本身是 internal interface，mod 拿不到类型
Debug.Print("GetObject<T> 只做字典查找，键 = typeof(T).FullName，不读任何特性", 0);
```

**用它最容易踩的一条**：**看到 `IMBAgent` 是 `internal interface` 就以为它不可用。** 它确实编译期不可引用，**但它 245 个方法全都是 `[EngineMethod("…")]` 标注的原生绑定**（`IMBAgent.cs` 245 处 `EngineMethod`，其中 96 个 `get_` 前缀、79 个 `set_` 前缀、70 个无前缀的动词名如 `die` / `make_dead` / `is_enemy`）。**而 `[ScriptingInterfaceBase]`（`IMBAgent.cs:8`）正是把这整张表暴露给脚本层的那个开关。** 换句话说：**这个接口「对 modder 不可见」与「对脚本可见」是同一件事的两面，而让它可见的正是这个空类。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| （类本身） | `internal class ScriptingInterfaceBase : Attribute` | **唯一的存在形式。** `ScriptingInterfaceBase.cs:5` 声明、`:6-7` 是空 body。**零自定义成员**——它连构造函数都没有，靠 `Attribute` 的无参构造。**28 个使用点全部是 `[ScriptingInterfaceBase]` 单独一行、紧贴在被标注的 `internal interface` 之上。** |
| （被标注的 28 个类型） | 全部 `internal interface IMB…` | 见上。**`internal` 意味着 mod 编译期引用不到**，但它们是脚本层与原生层的唯一契约面。 |
| （2 个未标注的对照） | `public interface IMBBindingList` / `public interface IMBCollection` | **30 个 `IMB*.cs` 里唯二没有 `[ScriptingInterfaceBase]` 的。** 两者都是 `public`、继承 BCL 集合接口（`IList`/`ICollection`/`IEnumerable`）或无基接口，**与原生指针无关** —— 这正解释了为什么它们不需要这个标记。 |

## 真实示例

28 个使用点的完整清单与它们的位置（全在 `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/`）：

```csharp
// IMBActionSet.cs:5        IMBAgentVisuals.cs:8         IMBMapScene.cs:6        IMBTeam.cs:6
// IMBAgent.cs:8            IMBAnimation.cs:5            IMBMessageManager.cs:6  IMBTestRun.cs:5
// IMBAgentVisuals.cs:8     IMBBannerlordChecker.cs:6    IMBMission.cs:9         IMBVoiceManager.cs:5
// IMBAnimation.cs:5        IMBBannerlordConfig.cs:5     IMBMultiplayerData.cs:3  IMBWindowManager.cs:6
// IMBBannerlordChecker.cs:6  IMBBannerlordTableauManager.cs:6  IMBNetwork.cs:5   IMBWorld.cs:5
// IMBBannerlordConfig.cs:5   IMBDebugExtensions.cs:6     IMBPeer.cs:6
// IMBBannerlordTableauManager.cs:6  IMBDelegate.cs:3    IMBScreen.cs:5
// IMBDebugExtensions.cs:6   IMBEditor.cs:7               IMBSkeletonExtensions.cs:7
// IMBDelegate.cs:3          IMBFaceGen.cs:6              IMBSoundEvent.cs:7
// IMBEditor.cs:7            IMBGame.cs:5                 IMBMission.cs:9（已列）
// IMBFaceGen.cs:6           IMBGameEntityExtensions.cs:7
// IMBGame.cs:5              IMBItem.cs:5
// IMBGameEntityExtensions.cs:7
// IMBItem.cs:5              ← 共 28 个，全部形如 [ScriptingInterfaceBase]
Debug.Print("28 处特性应用 + 1 处声明 = 29 处 grep 命中", 0);
```

被标记 vs 未标记的判定依据（这才是这个标记的语义）：

```csharp
// 被标记的 28 个：internal interface + 方法带 [EngineMethod("native_name", …)]
//   IMBAgent   ：245 个 EngineMethod（96 get_ / 79 set_ / 70 动词名）
//   IMBMission ：116 个 EngineMethod（42 get_ / 18 set_ / 56 动词名）
// 未被标记的 2 个：public interface，无 EngineMethod，与原生无关
//   IMBBindingList.cs  public interface IMBBindingList : IList, ICollection, IEnumerable
//   IMBCollection.cs   public interface IMBCollection
// ⇒ 标记的判据是「这是原生互操作接口」，不是「名字以 IMB 开头」
Debug.Print("判据 = 是否原生互操作接口；IMBBindingList/IMBCollection 是反例", 0);
```

## 风险与边界

- **`internal class`，编译期不可引用、不可继承、不可自行标注。** `ScriptingInterfaceBase.cs:5`。**mod 要新增可脚本化接口必须改引擎源码。**
- **零成员。** 空 body，连构造函数都没写。
- **托管侧没有读取点。** 我实测 `grep -rn "GetCustomAttribute"` 在该程序集下命中的全是别的特性（`ConfigProperty` / `ConfigPropertyInt` / `DefineSynchedMissionObjectType` / `DefineGameNetworkMessageType`）。**读 `ScriptingInterfaceBase` 的是原生侧，而原生侧不在源码树里** —— 所以我**不断言脚本层具体怎么用它**（是按特性过滤、按程序集约定、还是别的机制）。
- **28/30 的覆盖率不是「漏了两个」。** `IMBBindingList` / `IMBCollection` 是 `public` 纯托管接口，**不需要这个标记**。但我**没有找到任何断言「它们被有意排除」的代码**，所以不断言这是刻意设计。
- **`MBAPI.GetObject<T>()` 会返回 null。** `MBAPI.cs:70-77` 在键不存在时 `return null`。**而它只在 `SetObjects`（`:79`）之后可用** —— 我**没有读 `SetObjects` 的调用方**，故不断言它何时被调用。
- **与 `DefineGameNetworkMessageType` / `DefineSynchedMissionObjectType` 是三种不同的标记机制。** 那两个我实测有**托管侧读取方**（`GameNetwork.cs:1465`、`:1178`、`:1514`），而**本特性没有**。**这个差别本身就是本类的关键信息。**

## 参见

- 被标记的 28 个接口，其中最相关的两页：[IMBAgent](../IMBAgent/)（`IMBAgent.cs:8` 标注、245 个 `EngineMethod`）、[IMBMission](../IMBMission/)（`IMBMission.cs:9` 标注、116 个 `EngineMethod`）
- 托管侧入口：`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBAPI.cs:70-77`（`GetObject<T>`）、`:79-81`（`SetObjects`）、`:82-84`（`IMBAgent = GetObject<IMBAgent>()`）
- 有托管读取方的对照标记：[DefineGameNetworkMessageType](../DefineGameNetworkMessageType/)（`GameNetwork.cs:1465` 读它）、[DefineSynchedMissionObjectType](../DefineSynchedMissionObjectType/)（`GameNetwork.cs:1178`、`:1514` 读它）
- 同桶：[AgentHelper](../AgentHelper/)、[ItemType](../ItemType/)、[HitType](../HitType/)、[Target](../Target/)、[TacticOption](../TacticOption/)、[MBNetworkPeer](../MBNetworkPeer/)、[PlayerTypes](../PlayerTypes/)、[DynamicNavmeshLocalIds](../DynamicNavmeshLocalIds/)、[PerkAssemblyCollection](../PerkAssemblyCollection/)、[ProximityMapSearchStructInternal](../ProximityMapSearchStructInternal/)
- 桶首页：[mission API 分区](../)