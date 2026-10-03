---
title: "AgentInteractionInterfaceVM"
description: "任务中「注视目标时屏幕上浮现的那块交互提示」的视图模型：主提示两行、次提示列表、强制提示两行、血条与配色。它由 MissionAgentStatusVM 持有并以 internal 方法驱动焦点循环——因此模组只能调公开的那一小半。"
---
# AgentInteractionInterfaceVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction  
**Module:** TaleWorlds.MountAndBlade.ViewModelCollection  
**Type:** `public class AgentInteractionInterfaceVM : ViewModel`  
**Base:** `ViewModel`  
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction/AgentInteractionInterfaceVM.cs`

## 概述

任务中你把镜头对准一个可交互物（敌人、友军、马匹、地上的物品、攻城器械……）时，屏幕上会浮出那块提示。这是本类。它自己不决定显示什么——它是一块**被上游填充的显示板**。

构造函数只做初始化（`AgentInteractionInterfaceVM.cs:256-271`）：

```csharp
public AgentInteractionInterfaceVM(Mission mission)
{
    _mission = mission;
    IsActive = false;
    PrimaryInteractionMessages = new MBBindingList<MissionPrimaryInteractionItemVM>
    {
        new MissionPrimaryInteractionItemVM(),
        new MissionPrimaryInteractionItemVM()
    };
    SecondaryInteractionMessages = new MBBindingList<MissionInteractionItemBaseVM>();
    ForcedInteractionMessages = new MBBindingList<MissionPrimaryInteractionItemVM>
    {
        new MissionPrimaryInteractionItemVM(),
        new MissionPrimaryInteractionItemVM()
    };
}
```

注意两个列表**各自预先 new 了恰好两个**条目，并且是**常驻复用**的——`SetInteractionMessages` 每次都往 `[0]` / `[1]` 里写：

```csharp
private void SetInteractionMessages(Agent requesterAgent, IFocusable focusableObject, bool isInteractable)
{
    GetInteractionTexts(requesterAgent, focusableObject, isInteractable, out var focusableObjectInformation);
    IsActive = focusableObjectInformation.IsActive;
    PrimaryInteractionMessages[0].SetData(focusableObjectInformation.PrimaryInteractionText);
    PrimaryInteractionMessages[1].SetData(focusableObjectInformation.SecondaryInteractionText);
    PrimaryInteractionMessages[1].FocusTypeString = focusableObject?.FocusableObjectType.ToString() ?? FocusableObjectType.None.ToString();
}
```

**永远只有两行主提示，没有列表，没有动态增删。** 这是理解本类结构的关键。

## 🔴 可访问性：本页最重要的一节

这个类里**驱动焦点的核心方法全部是 `internal`**，不是 `public`：

| 成员 | 可见性 |
| --- | --- |
| `Tick(float dt)` | `internal`（`:307`） |
| `CheckAndClearFocusedAgent(Agent agent)` | `internal`（`:325`） |
| `OnFocusGained(Agent, IFocusable, bool)` | `internal`（`:339`） |
| `OnFocusLost(Agent, IFocusable)` | `internal`（`:385`） |
| `OnAgentInteraction(Agent, Agent, sbyte)` | `internal`（`:391`） |

持有方 `MissionAgentStatusVM` 正是靠它们驱动的（`MissionAgentStatusVM.cs:742/912/917/928/933/946`）。

**后果：模组在独立程序集里无法调用这五个方法。** 焦点循环完全由游戏驱动。你能调的公开成员只有：

`AddSecondaryMessage` / `RemoveSecondaryMessage` / `HasSecondaryInteractionMessage` / `SetForcedInteractionTexts` / `ClearForcedInteractionTexts` / `OnActiveMissionHintChanged` / `OnFocusedHealthChanged` / `ResetFocus` / `RefreshValues` / `OnFinalize`，以及全部 `[DataSourceProperty]`。

**这个区分决定了你能不能自己驱动这块提示。** 想让"按住某键显示自定义提示"这类玩法生效，路径不是调 `OnFocusGained`，而是走 `SetForcedInteractionTexts`。

## 心智模型

把它读成**「焦点驱动的两行主提示 + 两个可叠加的次提示来源 + 一个独立的两行强制提示槽」**：

- **谁 new 它**：`MissionAgentStatusVM`，第 677 行 `InteractionInterface = new AgentInteractionInterfaceVM(mission);`。**全树唯一构造点**。
- **谁持引用**：`MissionAgentStatusVM.InteractionInterface`（`:76` 私有字段，`:136` 作为 `[DataSourceProperty]` 公开）。它随 `MissionAgentStatusVM` 的生命周期存在，任务结束时随宿主一起释放。**本类不缓存自己。**
- **绑到哪个 View 属性**：十一个。`IsActive` / `HasSecondaryMessages` / `HasForcedMessages` 是三个布尔开关；`PrimaryInteractionMessages` / `SecondaryInteractionMessages` / `ForcedInteractionMessages` 是三个列表；`TargetHealth` / `ShowHealthBar` 是血条；`BackgroundColor` / `TextColor` 是配色；`DisplayInteractionText` 是主提示文字开关。
- **什么时候 Dispose**：继承 `ViewModel` 契约，由宿主调 `OnFinalize()`。本类**覆写了它**（`:290-305`），并把 `OnFinalize` 传播给三个列表里的每一个条目。**这是本目录里少数做了递归清理的类型。**
- 🔴 **`IsActive` 与 `HasForcedMessages` 的 setter 带副作用。** 它们不是纯通知属性：
  - `IsActive = false` 时（`:169-176`）自动 `ShowHealthBar = false` 并对 `PrimaryInteractionMessages` 逐条 `ResetData()`。
  - `HasForcedMessages = false` 时（`:246-252`）自动对 `ForcedInteractionMessages` 逐条 `ResetData()`。
  也就是说**你不能只改这两个布尔而不接受连带效果**。
- 🔴 **`HasSecondaryMessages` 是缓存值，不是推导属性。** 它由 `Tick()`（`:318`）和 `OnActiveMissionHintChanged()`（`:480`）在两处**手工**同步。你若在外部 `SecondaryInteractionMessages.Add(...)`，**必须自己把 `HasSecondaryMessages` 设为 true**，否则界面不显示。走公开的 `AddSecondaryMessage` 则会自动 `message.IsDisplayed = true`，但**它同样不直接设 `HasSecondaryMessages`**——依赖的是 `Tick` 下一帧补上。
- **三个 `SetXxx` 私有方法构成一条分派链。** `OnFocusGained` 按目标类型分派：`Agent` → 按 `IsHuman` / `IsMount` / 否则分别走 `SetHumanAgent` / `SetMount` / `SetGenericAgent`；`UsableMissionObject` → 若是 `SpawnedItemEntity` 走 `SetItem`（含 `CanQuickPickUp` 判定），否则 `SetUsableMissionObject`；`UsableMachine` → `SetUsableMachine`（额外按 `DestructionComponent` 算血量）；`DestructableComponent` → `SetDestructibleComponent`。**你无法替换这条链**——它是 `internal` 入口的私有实现。
- **`SetHealth` 的血量是百分比。** `TargetHealth = (int)(100f * healthPercentage)`，即 0–100，不是绝对 HP。`SetUsableMachine` 走 `100f * HitPoint / MaxHitPoint` 也是百分比。
- **常见误用一**：想 `Add` 到 `PrimaryInteractionMessages` 做多行提示。**做不到有意义**——该列表固定两条且由焦点循环覆写，你的第三条永远不会被 `SetInteractionMessages` 填。要多行提示请用 `SecondaryInteractionMessages`。
- **常见误用二**：从模组调 `Tick` 或 `OnFocusGained` 自定义焦点行为。**编译不过**（internal）。这是本页最常踩的编译错误。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `IsActive` | `[DataSourceProperty] public bool IsActive`（`:154-178`） | 主提示是否显示。**setter 带副作用**：置 `false` 时自动 `ShowHealthBar = false` 并逐条 `ResetData()` 主提示（`:169-176`）。由 `SetInteractionMessages` 根据 `FocusableObjectInformation.IsActive` 写入。 |
| `PrimaryInteractionMessages` | `[DataSourceProperty] public MBBindingList<MissionPrimaryInteractionItemVM>`（`:86-101`） | **固定两条**（`:260-264` 预分配），代表主/次提示两行。焦点循环每次覆写 `[0]` 与 `[1]`，**从不增删**。 |
| `SecondaryInteractionMessages` | `[DataSourceProperty] public MBBindingList<MissionInteractionItemBaseVM>`（`:103-118`） | 可动态增删的次提示列表，典型来源是任务提示（`MissionHintInteractionItemVM`）。**增删后必须自行同步 `HasSecondaryMessages`。** |
| `ForcedInteractionMessages` | `[DataSourceProperty] public MBBindingList<MissionPrimaryInteractionItemVM>`（`:214-229`） | 独立于焦点循环的**两行**强制提示（同样 `:266-270` 预分配）。由 `SetForcedInteractionTexts` / `ClearForcedInteractionTexts` 控制，**这是模组能完全自主驱动的那块**。 |
| `HasSecondaryMessages` | `[DataSourceProperty] public bool HasSecondaryMessages`（`:180-195`） | **缓存值**，非推导属性。由 `Tick`（`:318`）与 `OnActiveMissionHintChanged`（`:480`）手工同步。外部直接改列表不会自动更新它。 |
| `HasForcedMessages` | `[DataSourceProperty] public bool HasForcedMessages`（`:231-254`） | 强制提示是否显示。**setter 带副作用**：置 `false` 时自动对 `ForcedInteractionMessages` 逐条 `ResetData()`（`:246-252`）。 |
| `TargetHealth` / `ShowHealthBar` | `[DataSourceProperty] public int TargetHealth` / `bool ShowHealthBar`（`:52-84`） | 血条。**`TargetHealth` 是 0–100 的百分比**而非绝对 HP（`SetHealth:507`）。`SetUsableMachine` / `SetDestructibleComponent` 也按百分比写入。 |
| `SetForcedInteractionTexts` | `public void SetForcedInteractionTexts(TextObject text1, bool isDisabled1, TextObject text2, bool isDisabled2)`（`:526-531`） | 模组最该用的入口。写死两行强制提示并置 `HasForcedMessages = true`。**不依赖焦点循环，不受 `internal` 限制。** |
| `ClearForcedInteractionTexts` | `public void ClearForcedInteractionTexts()`（`:533-538`） | 清空两行并置 `HasForcedMessages = false`。 |
| `AddSecondaryMessage` | `public void AddSecondaryMessage(MissionInteractionItemBaseVM message)`（`:483-492`） | 追加一条次提示并置 `message.IsDisplayed = true`。**若该消息已在显示中会触发 `Debug.FailedAssert` 并直接 return**（`:487-489`）——重复添加是断言错误，不是静默忽略。 |
| `RemoveSecondaryMessage` | `public bool RemoveSecondaryMessage(MissionInteractionItemBaseVM message)`（`:494-498`） | 移除一条次提示，返回是否真的移除成功。会先把 `IsDisplayed` 置 false。 |
| `HasSecondaryInteractionMessage` | `public bool HasSecondaryInteractionMessage(MissionInteractionItemBaseVM message)`（`:500-503`） | 实为 `return message.IsDisplayed;`——**判断的是消息自身的标志位，不是列表内容**。 |
| `OnActiveMissionHintChanged` | `public void OnActiveMissionHintChanged(MissionHint previousHint, MissionHint newHint)`（`:464-481`） | 任务提示切换时的联动：旧提示为 null 时移除对应条目，新提示非 null 时追加 `MissionHintInteractionItemVM`，最后同步 `HasSecondaryMessages`。 |
| `OnFocusedHealthChanged` | `public void OnFocusedHealthChanged(IFocusable focusable, float healthPercentage, bool hideHealthbarWhenFull)`（`:334-337`） | 焦点目标血量变化时更新血条。`hideHealthbarWhenFull` 为真时满血自动隐藏。 |
| `ResetFocus` | `public void ResetFocus()`（`:518-524`） | 清空焦点引用、隐藏血条、复位两条主提示。**不清 `SecondaryInteractionMessages`。** |
| `RefreshValues` | `public override void RefreshValues()`（`:273-288`） | 对三个列表逐条 `RefreshValues()`。 |
| `OnFinalize` | `public override void OnFinalize()`（`:290-305`） | `base.OnFinalize()` 后对三个列表里的**每一个条目**调 `OnFinalize()`。**本目录里少数做了递归清理的类型。** |
| `Tick` 🔴 | `internal void Tick(float dt)`（`:307-323`） | 每帧驱动：焦点为 `Agent` 时先 `ResetFocus()` 再重新 `OnFocusGained`；`MissionMode.StartUp` 且焦点是敌人时强制 `IsActive = false`；同步 `HasSecondaryMessages` 并逐条刷新次提示。**模组无法调用。** |
| `OnFocusGained` 🔴 | `internal void OnFocusGained(Agent mainAgent, IFocusable focusableObject, bool isInteractable)`（`:339-383`） | 焦点进入时的类型分派链（见上文）。**模组无法调用。** |
| `OnFocusLost` 🔴 | `internal void OnFocusLost(Agent agent, IFocusable focusableObject)`（`:385-389`） | 焦点丢失时 `ResetFocus()` + `IsActive = false`。**模组无法调用。** |
| `CheckAndClearFocusedAgent` 🔴 | `internal void CheckAndClearFocusedAgent(Agent agent)`（`:325-332`） | 若参数正是当前焦点 Agent，则 `IsActive = false` + `ResetFocus()`。**模组无法调用。** |
| `OnAgentInteraction` 🔴 | `internal void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)`（`:391-397`） | 潜行模式下对非敌人 humanoid 的交互，会强制刷新其提示行。**模组无法调用。** |

## 真实示例

模组唯一能完全自主驱动的那块——强制提示两行（公开 API，无需 internal）：

```csharp
using TaleWorlds.Localization;
using TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction;

public void ShowForcedHint(AgentInteractionInterfaceVM ui, bool interactable)
{
    TextObject line1 = new TextObject("{=MyHint1}Hold F to interact");
    TextObject line2 = new TextObject("{=MyHint2}Requires a spare mount");

    // 走公开入口，不碰任何 internal 焦点方法。
    ui.SetForcedInteractionTexts(line1, false, line2, !interactable);
}

public void HideForcedHint(AgentInteractionInterfaceVM ui)
{
    ui.ClearForcedInteractionTexts();
}
```

追加一条自己的次提示——注意去重断言：

```csharp
using TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction;

public void PushHint(AgentInteractionInterfaceVM ui, MissionInteractionItemBaseVM hint)
{
    // AddSecondaryMessage 内部会先查 HasSecondaryInteractionMessage；
    // 已显示时触发 Debug.FailedAssert 并直接 return，不会重复加入。
    if (!ui.HasSecondaryInteractionMessage(hint))
    {
        ui.AddSecondaryMessage(hint);
    }
}

public void PopHint(AgentInteractionInterfaceVM ui, MissionInteractionItemBaseVM hint)
{
    ui.RemoveSecondaryMessage(hint);
}
```

自己维护 `HasSecondaryMessages`——因为它是缓存值而不是推导属性：

```csharp
public void AddHintAndSyncFlag(AgentInteractionInterfaceVM ui, MissionInteractionItemBaseVM hint)
{
    ui.SecondaryInteractionMessages.Add(hint);
    hint.IsDisplayed = true;

    // 关键：HasSecondaryMessages 不会自动推导。
    // 原版靠 Tick() 下一帧补上，手动添加时必须自己同步。
    ui.HasSecondaryMessages = ui.SecondaryInteractionMessages.Count > 0;
}
```

读血条——注意 `TargetHealth` 是百分比：

```csharp
public string DescribeTarget(AgentInteractionInterfaceVM ui)
{
    if (!ui.ShowHealthBar)
    {
        return "no bar";
    }

    // 0..100 的百分比，不是绝对 HP 值。
    return "target at " + ui.TargetHealth + "%";
}
```

## 风险与边界

- 🔴 **五个驱动方法全是 `internal`，模组编译不过。** `Tick`、`OnFocusGained`、`OnFocusLost`、`CheckAndClearFocusedAgent`、`OnAgentInteraction` 全部如此，调用方是同程序集的 `MissionAgentStatusVM`。**任何"自己驱动焦点循环"的方案在独立程序集里都不成立**；正确路径是 `SetForcedInteractionTexts` 与 `AddSecondaryMessage`。
- 🔴 **`HasSecondaryMessages` 是手工同步的缓存值。** 直接改列表不会更新它，会出现"提示在列表里但界面不显示"。走 `AddSecondaryMessage` 也只是设了 `message.IsDisplayed`，仍要等 `Tick` 下一帧。**手动改列表就必须手动同步。**
- **两个布尔属性的 setter 有副作用。** `IsActive = false` 与 `HasForcedMessages = false` 都会连带 `ResetData()` 清对应条目。只改布尔而不要连带效果是做不到的。
- **`AddSecondaryMessage` 重复添加是断言失败**（`:487-489` 的 `Debug.FailedAssert`），不是静默忽略。开发版会弹断言，发布版行为取决于断言实现。**先查 `HasSecondaryInteractionMessage`。**
- **主提示固定两条，永不增删。** 想做多行提示必须走 `SecondaryInteractionMessages`。往 `PrimaryInteractionMessages` 加第三条不会被焦点循环填内容。
- **焦点循环每帧重置。** `Tick` 开头对 `Agent` 焦点先 `ResetFocus()` 再 `OnFocusGained`（`:309-313`）。你在主提示里写的内容下一帧就被覆写。
- **`SetInteractionMessages` 的文本来自外部提供方**：`_mission?.FocusableObjectInformationProvider?.GetInteractionTexts(...)`（`:403`）。**两者都可为 null**——mission 为 null 或未提供 provider 时 `FocusableObjectInformation` 保持默认值 `IsActive = false`，提示不显示。
- **`TargetHealth` 是百分比不是绝对值**（`SetHealth:507`、`SetUsableMachine:421`、`SetDestructibleComponent:429`）。当血条显示 100 时可能实际是满血也可能被 `hideHealthbarWhenFull` 隐藏。
- **生命周期**：本类不注册 `CampaignEvents`、不注册 `Game.Current.EventManager`，持有的是 `Mission` 引用。`OnFinalize` 做了递归清理（三个列表逐条 `OnFinalize`），**这是正确的**。它自身不泄漏；但若你把它缓存在比任务更长寿的地方，`Mission` 引用会跟着活。
- **序列化**：无。没有 `SyncData`、不接触 `IDataStore`。纯任务内 UI 态。
- **native 边界**：本类纯托管，但它下游的 `Agent` / `Mission` / `UsableMachine` 大量触及 `Bannerlord.Native`——那是焦点链内部的事。
- **同名方法的陷阱：`GetWeaponSpecificText` 在这个类里是死代码。** `AgentInteractionInterfaceVM.cs:540` 定义了一个 `private string GetWeaponSpecificText(SpawnedItemEntity)`，会读 `MissionWeapon` 并拼 `str_LEFT_over_RIGHT_in_paranthesis`（盾牌的「当前/最大」或箭袋的「存量/上限」）。**在本文件内它的出现次数是 1——只有第 540 行那个定义，没有任何调用点。** 注意 `MissionFocusableObjectInformationProvider.cs:160` 有个**同名但不同类**的私有实现，那个是真被用的（`:105/113/122/129` 四处调用）。**两处不是同一段代码，不要照着 `AgentInteractionInterfaceVM` 这份写示例——它没接到焦点链上。**
- **跨版本**：`internal`/`public` 的分界、`MissionAgentStatusVM.cs:677/742/912/917/928/933/946` 的调用形状、以及 `FocusableObjectType` 与 `FocusableObjectInformation` 的字段名都是 v1.4.5 的形状。**上游若把某个 internal 改成 public，本页的"编译不过"结论即失效。**

## 依赖关系

- ↑ VM 基类：[ViewModel](../../core-extra/ViewModel) —— 属性变更通知与 `OnFinalize` 契约
- ↔ 同级：[MissionPrimaryInteractionItemVM](../MissionPrimaryInteractionItemVM) —— 主提示与强制提示的条目类型，`SetData` / `ResetData` / `FocusTypeString` 都在它上面
- ↔ 同级：[MissionInteractionItemBaseVM](../MissionInteractionItemBaseVM) —— 次提示条目的基类
- ↔ 同级：[MissionHintInteractionItemVM](../MissionHintInteractionItemVM) —— `OnActiveMissionHintChanged` 自动追加的任务提示条目
- ↔ 宿主：`MissionAgentStatusVM`（`TaleWorlds.MountAndBlade.ViewModelCollection`），唯一的构造方与全部 internal 方法的调用方
- → 任务上下文：[Mission](../../mission/Mission)、[Agent](../../mission/Agent)
- → 焦点对象接口：`IFocusable`、`UsableMissionObject`、`SpawnedItemEntity`、`UsableMachine`、`DestructableComponent`（`TaleWorlds.MountAndBlade`）
- → 列表容器：[MBBindingList](../../core-extra/MBBindingList)
