---
title: "AlleyHelper"
description: "管理据点 roster 并选择帮派据点领队的 Campaign UI 辅助。"
---
# AlleyHelper

**命名空间：** `Helpers`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public static class AlleyHelper`  
**基类：** `System.Object`  
**源文件：** `bin/TaleWorlds.CampaignSystem/Helpers/AlleyHelper.cs`

## 一句话职责

`AlleyHelper` 打开据点 roster 的 party screen，并创建选择据点领队的 Clan 成员查询；它把所有权和持久化交给调用方的 Campaign behavior。

## 心智模型

`AlleyHelper` 是薄 UI 边界，不是据点仓库。`OpenScreenForManagingAlley` 把 roster 和回调转交给 `PartyScreenHelper.OpenScreenForManagingAlley`，并附加两条私有规则：普通部队可以转移，但 Hero 和囚犯不能转移；普通部队数量必须处于当前 [AlleyModel](../../campaign/AlleyModel) 的最小值和最大值之间。

`CreateMultiSelectionInquiryForSelectingClanMemberToAlley` 从 `Campaign.Current.Models.AlleyModel` 取得每个 Clan 成员及其可用性详情，为每项创建带角色图像、显示名、启用状态和禁用原因的 `InquiryElement`，然后由 `MBInformationManager` 显示查询并暂停游戏。调用方决定如何处理选中的 `CharacterObject`，也必须自己保存 roster 或领队变更。

## 依赖关系

- UI 转移：`PartyScreenHelper`、`PartyPresentationDoneButtonDelegate`、`PartyPresentationCancelButtonDelegate`、`PartyScreenLogic` 和 `TroopRoster`。
- 战役宿主：[Campaign](../../campaign/Campaign) 与 [GameModels](../../campaign/GameModels)，尤其是当前 [AlleyModel](../../campaign/AlleyModel)。
- 据点身份：[Alley](../../campaign/Alley)、[Hero](../../campaign/Hero) 和 [Settlement](../../campaign/Settlement)。
- 查询输出：`InquiryElement`、`CharacterCode`、`CharacterImageIdentifier`、`MultiSelectionInquiryData` 和 `MBInformationManager`。
- 真实调用方：`AlleyCampaignBehavior` 负责城镇管理，`MissionAlleyHandler` 负责接管流程；它们拥有玩家据点的可保存数据和任务后果。

## 公开成员

### OpenScreenForManagingAlley

`OpenScreenForManagingAlley(bool isNewAlley, TroopRoster leftMemberRoster, PartyPresentationDoneButtonDelegate onDoneButtonClicked, TextObject leftText, PartyPresentationCancelButtonDelegate onCancelButtonClicked = null)` 使用给定的左侧 roster 打开 party screen。

helper 的转移谓词会拒绝所有 Hero 和所有囚犯。完成按钮谓词用 `leftMemberRoster.TotalRegulars` 与 `AlleyModel.MinimumTroopCountInPlayerOwnedAlley`、`MaximumTroopCountInPlayerOwnedAlley` 比较；越界时创建带 `LOWER_LIMIT` 或 `UPPER_LIMIT` 变量的本地化错误文本。完成回调会收到各份 roster；`AlleyCampaignBehavior` 这样的调用方再把新的 `leftMemberRoster` 写回自己的可保存数据。

`isNewAlley` 只会继续传给 party screen 流程；它不会自行创建或保存 `Alley`。

```csharp
TroopRoster initialRoster = TroopRoster.CreateDummyTroopRoster();
initialRoster.AddToCounts(leader, 1, false, 0, 0, true, -1);
AlleyHelper.OpenScreenForManagingAlley(
    true,
    initialRoster,
    OnPartyScreenDone,
    new TextObject("{=s8dsW6m0}New Alley"),
    OnPartyScreenCancel);
```

### CreateMultiSelectionInquiryForSelectingClanMemberToAlley

`CreateMultiSelectionInquiryForSelectingClanMemberToAlley(Alley alley, Action<List<InquiryElement>> affirmativeAction, Action<List<InquiryElement>> negativeAction)` 使用当前 [AlleyModel](../../campaign/AlleyModel) 查询给定 [Alley](../../campaign/Alley) 的 Clan 成员及其可用性。

可用和“延迟后可用”的成员会启用，其他成员仍显示但带禁用原因。肯定回调收到的是所选 inquiry 元素列表，而不是直接的 `Hero`。SandBox 调用方会读取第一个元素的 `Identifier` 作为 `CharacterObject`，再取得其 `HeroObject` 并执行领队变更。helper 本身不会改变 owner、Clan 关系、存档字段或 mission 状态。

```csharp
Alley alley = CampaignMission.Current?.LastVisitedAlley;
if (alley != null)
{
    AlleyHelper.CreateMultiSelectionInquiryForSelectingClanMemberToAlley(
        alley,
        OnCompanionSelectedForNewAlley,
        OnCompanionSelectionCancel);
}
```

## 真实示例

下面对应 v1.4.5 的据点接管流程。`CampaignMission.Current.LastVisitedAlley` 是任务实际持有的据点，查询返回的 `CharacterObject` 也是 inquiry 真正产生的标识。

```csharp
using System.Collections.Generic;
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;
using TaleWorlds.Localization;

public sealed class AlleyTakeoverFlow
{
    public void ChooseLeaderForVisitedAlley()
    {
        Alley alley = CampaignMission.Current?.LastVisitedAlley;
        if (alley == null)
        {
            return;
        }

        AlleyHelper.CreateMultiSelectionInquiryForSelectingClanMemberToAlley(
            alley,
            selected => OpenNewAlleyScreen(selected),
            _ => LeaveTheAlleyEmpty());
    }

    private void OpenNewAlleyScreen(List<InquiryElement> selected)
    {
        CharacterObject leader = selected.First().Identifier as CharacterObject;
        if (leader == null)
        {
            return;
        }

        TroopRoster initialRoster = TroopRoster.CreateDummyTroopRoster();
        initialRoster.AddToCounts(leader, 1, false, 0, 0, true, -1);
        AlleyHelper.OpenScreenForManagingAlley(
            true,
            initialRoster,
            OnPartyScreenDone,
            new TextObject("New Alley"),
            OnPartyScreenCancel);
    }

    private void OnPartyScreenDone(TroopRoster leftMemberRoster, TroopRoster leftPrisonRoster,
        TroopRoster rightMemberRoster, TroopRoster rightPrisonRoster,
        FlattenedTroopRoster takenPrisonerRoster, FlattenedTroopRoster releasedPrisonerRoster,
        bool isForced, PartyBase leftParty, PartyBase rightParty)
    {
        // owning Campaign behavior persists leftMemberRoster and applies the leader change
    }

    private void OnPartyScreenCancel()
    {
        LeaveTheAlleyEmpty();
    }

    private void LeaveTheAlleyEmpty()
    {
    }
}
```

上例展示的是数据边界；真实 Campaign behavior 仍需提供自己的持久化和后续结果处理。这里使用 dummy roster 是合理的，因为 SandBox 接管流程正是用同一 API 放入初始领队行。

## 风险与存档边界

- **Campaign/Model 阶段：** 两个方法都会读取 `Campaign.Current.Models.AlleyModel`；在主菜单或 Campaign Model 尚未初始化时调用可能失败。
- **UI 所有权：** helper 会为 inquiry 暂停游戏，并把控制交给回调；不要从后台线程调用，也不要假设回调同步执行。
- **Roster 规则：** 完成按钮限制的是 `TotalRegulars`。Hero 和囚犯不属于这个普通人数统计，同时转移谓词仍会拒绝它们。
- **持久化：** party screen 完成不会保存 roster，也不会设置据点 owner。拥有据点存档记录的 behavior 必须保存 `leftMemberRoster`，并派发相应事件或 Action 后果。
- **选择有效性：** “延迟后可用”的成员会按 `AlleyModel` 状态显示但当前不可用；不能把每个 inquiry 元素都当成可选。
- **生命周期：** `Alley` 与其 Settlement 属于 Campaign 对象图；不要跨 Campaign 卸载/加载缓存旧据点或 `InquiryElement`。

## 版本注记

本页按 v1.4.5 `Helpers/AlleyHelper.cs` 编写。它的公开表面只有 party-screen 桥接和 Clan 成员查询；普通人数上下限与可用性文本来自当前 `AlleyModel`，不是 helper 内的常量。

## 导航

- [↑ API 系统索引](../)
- [↔ Alley](../../campaign/Alley)
- [相关：AlleyModel](../../campaign/AlleyModel)
- [相关：Campaign](../../campaign/Campaign)
- [相关：Hero](../../campaign/Hero)
- [相关：TroopRoster](../../campaign/TroopRoster)
