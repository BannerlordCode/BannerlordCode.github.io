---
title: "PurchaseItemTutorialQuestTask"
description: "教程用的『买够 N 个指定物品』子任务：挂一个交易事件累加数量，达标即回调宿主任务。"
---
# PurchaseItemTutorialQuestTask

**Namespace:** StoryMode.Quests.QuestTasks
**Module:** StoryMode
**Type:** `public class PurchaseItemTutorialQuestTask : QuestTaskBase`
**Base:** QuestTaskBase
**Source:** StoryMode/Quests/QuestTasks/PurchaseItemTutorialQuestTask.cs

## 概述

这是一个被塞进 `StoryModeQuestBase` 里的最小可复用任务单元：它只关心一件事——玩家在交易界面**买进**了多少个某个 `ItemObject`。它自己不持有任务日志、不画界面、不弹对话框，只监听一次 `CampaignEvents.PlayerInventoryExchangeEvent`，把本次交易里属于目标物品的条目累加到一个 int 上，达标就 `Finish(FinishStates.Success)` 触发构造时传进来的 `onSucceed` 委托。它不是一个完整的任务，也不是给 mod 用的通用 API，而是把新手教程里"买 2 袋粮食"这一句话变成可存档、可推进的一小段状态机。

## 心智模型

在战役生命周期里它**没有自己的入口**：它只能由一个已经存在的任务在构造期 `new` 出来，然后由宿主任务 `AddTask(...)` 挂进 `QuestTaskBase` 的内部列表。典型顺序是「宿主任务构造函数 → new PurchaseItemTutorialQuestTask(...) → 宿主.AddTask(task)」；回调 `onSucceed` 通常直接就是宿主的 `CompleteQuestWithSuccess()`。

最容易踩的坑是**读档**。`_targetItemAmount` 和 `_item` 两个字段没有 `[SaveableField]`，所以它们根本不会被写进存档；跨读档之后宿主必须在 `InitializeQuestOnGameLoad()` 里手动调 `InitializeTaskOnLoad(target, item)` 把这两个值重新塞回去，否则 `PlayerInventoryExchange` 里的比较就会拿 `null` 跟物品比，任务永远不推进。`PurchaseGrainTutorialQuest` 就是标准示范：构造时传 2 和 `DefaultItems.Grain`，读档时再传一遍。同理 `SetReferences()` 注册的是 `AddNonSerializedListener`，所以每次读档都必须重跑，否则事件监听不会自动恢复。

第二个坑是它**只统计买入方向**。回调签名里 `soldItems` 被完全忽略，玩家从行商人手里卖出同种物品不会推进进度；如果 mod 想做"买卖都算"，得自己写一份而不是指望这个类。

## 主要成员

- `PurchaseItemTutorialQuestTask(Action onSucceed, int targetItemAmount, ItemObject item, JournalLog progressLog = null)`：唯一的构造入口。`onSucceed` 是达标回调，必传；`progressLog` 传 `null` 时本类不更新任何任务日志，只完成不显示。基类四个参数（dialogFlow/onFailed/onCanceled）本类一律传 `null`，因为教程子任务不需要对话也不需要失败回调。
- `void InitializeTaskOnLoad(int targetItemAmount, ItemObject item)`：**读档补洞专用**。因为这两个值不参与序列化，读档后必须由宿主重新注入，否则事件回调里的比较条件失效。只补这两个字段，`_purchasedItemAmount` 本身是 `[SaveableField(2)]`，会自己恢复。
- `void SetReferences()`：override 基类钩子，挂 `CampaignEvents.PlayerInventoryExchangeEvent` 的非序列化监听。**不需要（也不应该）由 mod 手动调用**——`AddTask` / `AddTaskBehaviorsOnGameLoad` 会在合适的时机触发它。
- 私有 `PlayerInventoryExchange(List<ValueTuple<ItemRosterElement,int>> purchasedItems, List<ValueTuple<ItemRosterElement,int>> soldItems, bool isTrading)`：真正的判定逻辑。遍历 `purchasedItems`，逐条比对 `itemRosterElement.EquipmentElement.Item == _item`，累加数量；一旦累计值 `>= _targetItemAmount` 就把日志打到 target（不是实际购买量，避免进度条溢出）、`Finish(Success)` 并 `break`，否则把日志更新成当前累计值。
- `[SaveableField(1)] _progressLog`（readonly JournalLog）：宿主传进来的任务日志对象，本类负责写进度。readonly + SaveableField 的组合意味着构造时必须给，不能事后换。
- `[SaveableField(2)] _purchasedItemAmount`：已累计的购买量，是唯一真正跨读档保存的进度数据。

## 使用示例

```csharp
// 构造期：宿主任务里造出子任务并挂上
_purchaseItemTask = new PurchaseItemTutorialQuestTask(
    new Action(this.OnBoughtEnoughGrain), 2, DefaultItems.Grain, _questLog);
AddTask(_purchaseItemTask);

// 读档期：因为 target/item 不存档，必须重新注入
protected override void InitializeQuestOnGameLoad()
{
    _purchaseItemTask.InitializeTaskOnLoad(2, DefaultItems.Grain);
}
```

## 风险与边界

存档方面最大的风险就是上面说的**半序列化**：进度存了、目标值没存。跨读档时若宿主忘了 `InitializeTaskOnLoad`，任务不会崩、不会报错，只是永远卡在 0/N——这是最难查的一类 bug，务必成对实现。另外 `EquipmentElement` 在纯物品（非装备）条目上可能为 null 语义；原版代码直接取 `.Item`，说明教程物品一定是装备条目（粮食是 trade goods 但仍走 ItemRosterElement 的 EquipmentElement 路径），沿用即可，不要换成 `ItemRosterElement.Item`。`isTrading` 参数本类完全没用到，mod 想在"打开交易界面时"就提示进度得自己接 `CampaignEvents.GameMenuOpened`。

## 依赖关系

- [PurchaseGrainTutorialQuest（唯一使用方）](../PurchaseGrainTutorialQuest)
- [CampaignEvents（事件表全集）](../../campaign/CampaignEvents)
- [RecruitTroopsTutorialQuest（姊妹任务）](../RecruitTroopsTutorialQuest)