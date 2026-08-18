---
title: "CampaignInformationManager"
description: "战役层的通知聚合器：把日志条目与地图通知桥接到 core 的 InformationManager，并以静态事件 API 向对话/任务界面暴露对话通知，同时持有当前战役的地图通知列表。"
---

# CampaignInformationManager

**命名空间：** TaleWorlds.CampaignSystem
**模块：** TaleWorlds.CampaignSystem
**类型：** `public class CampaignInformationManager`
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignInformationManager.cs

## 概述

`CampaignInformationManager` 是战役（Campaign）层对玩家的统一通知出口，由 `Campaign.Current.CampaignInformationManager` 在每次战役启动时持有一个实例。它做三件事：把战役日志条目（`LogEntry`）中可聊天的通知文本按外交模型配色转发给 core 的 `InformationManager.DisplayMessage`；维护一份随存档持久化的地图通知列表（`_mapNotices`，元素为 `InformationData`），供界面判断“某类事件是否已提示过”；并通过一组**静态事件 + 静态方法**（`OnDisplayDialog` / `AddDialogLine` 等）把对话通知交给已订阅的 UI 层去播放与查询。它自身不绘制任何窗口，只负责聚合与转发，是战役状态到 core UI 之间的桥。

## 心智模型

把它理解成一个**战役作用域的单例通知桥**，而不是一个无状态的纯工具类：实例挂在 `Campaign.Current` 上，随战役创建/读档而存在，内部 `_mapNotices` 是被 `[SaveableField(10)]` 序列化的真实世界状态。它的静态部分（五个 `event` 与 `AddDialogLine`/`ClearDialogNotification` 等静态方法）更像一个“事件总线”——方法本身只是把调用转交给订阅了 `OnDisplayDialog` 等的 UI 层，真正弹窗、播语音、管理排队的是订阅者，调用方因此拿不到实现细节，只能拿到 `DialogNotificationHandle` 这种句柄。它与 core 的 `InformationManager`（位于 `TaleWorlds.Core`）的关键区别在于层级：`InformationManager` 是最底层的消息/询问 sink，直接写消息日志、弹 Inquiry；`CampaignInformationManager` 只存在于战役中，是战役事件到该 sink 的封装与补充（地图通知、对话通知），离开战役上下文既无实例也毫无意义。用它的场景是：在行为或 UI 里“把一件事通知给玩家”；不要用它去改世界状态、也不要在非战役线程/阶段调用——那不是它的职责，真正的状态改动应走 `CampaignBehaviorBase` 子类或对应的 `*Action`。

## 何时使用 / 何时不要使用

- **使用**：需要把一条战役事件推送到地图通知列表时，调用实例方法 `NewMapNoticeAdded(InformationData)`（调用方通常 `new` 一个 `*MapNotification` / `InformationData` 子类传入）；需要在弹窗前确认“同类通知是否已在列表中”时，用 `InformationDataExists<T>(predicate)` 查询；需要在对话/任务流程里向玩家播放一条带语音的对话通知时，用静态方法 `CampaignInformationManager.AddDialogLine(...)`，并通过 `ClearDialogNotification` / `ClearAllDialogNotifications` 收尾。
- **不要使用**：不要在 `Campaign.Current` 为 `null` 的上下文（主菜单、子模块加载早期、编辑器）调用——实例不存在，直接空引用。不要把它当状态层去“存”业务数据，地图通知列表仅表示“已提示过”，真正的世界状态在 `Settlement`、`Clan`、`Kingdom` 等对象上。不要把 `CampaignInformationManager` 与 `TaleWorlds.Core` 的 `InformationManager` 混用：前者管战役通知聚合，后者管最终消息与询问落地，二者是上下游而非替代关系。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `CampaignInformationManager` 实例，是整个通知桥的宿主与生命周期来源。
- [InformationManager](../../core-extra/InformationManager) —— core 层最终 sink；本类在 `NewLogEntryAdded` 中把日志通知文本转交给 `InformationManager.DisplayMessage`。
- [MBInformationManager](../../core-extra/MBInformationManager) —— 地图通知与对话通知的底层句柄/状态类型（`DialogNotificationHandle`、`NotificationStatus`、`NotificationPriority`、`AddNotice` 等）来源。
- `LogEntry`（[LogEntry](../LogEntry) / [LogEntryHistory](../LogEntryHistory)）—— 战役日志条目是本类文本通知的输入；`LogEntryHistory` 在新增条目时调用 `NewLogEntryAdded`。

下游与协同调用方：

- [DefaultLogsCampaignBehavior](../DefaultLogsCampaignBehavior) —— 大量 `NewMapNoticeAdded(new *MapNotification(...))` 调用点（宣战、议和、军队解散、定居点叛乱、婚姻等）。
- [CampaignBehaviorBase](../CampaignBehaviorBase) —— 各 `*CampaignBehavior`（如 `CommentOnDeclareWarBehavior`、`EducationCampaignBehavior`、`AllianceCampaignBehavior`）是其子类，是地图通知的生产者。
- [ConversationManager](../ConversationManager) 与任务/说服系统 —— 是静态 `OnDisplayDialog` 等事件的订阅者，负责真正播放对话通知。
- 各种 `*OfferCampaignBehavior`（附庸、雇佣兵、赎金、婚姻提议等）—— 用实例 `InformationDataExists<T>` 判断同类提议通知是否已存在，避免重复弹窗。

## 风险

- **必须在战役 UI 的正确阶段/线程调用**：静态对话通知方法只是触发 `OnDisplayDialog` 等事件，若此时没有 UI 订阅（例如战役尚未进入地图界面、或处于 Mission/战场层），调用要么返回 `null`/默认状态，要么把通知丢给一个未就绪的队列；地图通知的 `_isSessionLaunched` 也只在 `RegisterEvents()` 之后才为 `true`，在此之前 `NewLogEntryAdded` 不会转发任何消息。
- **非战役上下文调用导致空引用**：`Campaign.Current.CampaignInformationManager` 仅在战役运行时非 `null`。在主菜单、子模块早期或存档外调用实例方法会直接 `NullReferenceException`；静态方法虽不依赖实例，但其事件若无订阅者也只是空转。
- **与 `InformationManager` 混淆**：二者命名相近但层级不同。把应走 `CampaignInformationManager` 的战役通知直接写到 `InformationManager`，会绕过地图通知去重与对话通知队列，导致重复提示或丢失语音；反之在战役层外用 `CampaignInformationManager` 会因无实例而崩溃。
- **地图通知列表是持久化状态**：`_mapNotices` 带 `[SaveableField(10)]`，随档保存。若你新增的通知类型未正确实现 `InformationData.IsValid()`，读档时 `OnGameLoaded` 会按 `IsValid()` 过滤，无效条目被丢弃；依赖“列表里一定有某条目”的逻辑要先确认其 `IsValid` 语义。
- **跨战役重载后的实例失效**：把 `Campaign.Current.CampaignInformationManager` 缓存进静态字段或长生命周期对象，重载/读档后会指向旧战役的已销毁实例，调用即异常。每次需要时都重新走 `Campaign.Current.CampaignInformationManager` 获取。

## 成员说明

### 地图通知（实例成员，挂在 Campaign.Current 上）

- **`NewMapNoticeAdded(InformationData informationData)`**
  - 用途：把一条地图通知加入当前战役的通知列表，并立即调用 `MBInformationManager.AddNotice` 让 UI 显示它。调用方通常传入 `WarMapNotification`、`PeaceMapNotification`、`SettlementOwnerChangedMapNotification` 等 `InformationData` 子类。
  - 副作用：写入 `_mapNotices` 并触发底层地图通知。
  - 调用时机：由战役行为在对应事件发生后调用，例如 `CommentOnDeclareWarBehavior` 宣战时、 `DefaultLogsCampaignBehavior` 记录军队解散/定居点叛乱时。

- **`InformationDataExists<T>(Func<T, bool> predicate) where T : InformationData`**
  - 用途：遍历 `_mapNotices`，判断列表中是否已存在类型 `T` 且满足 `predicate` 的通知；用于在弹窗前向玩家确认“同类事件是否已提示过”，避免重复。
  - 副作用：无。
  - 调用时机：UI 视图模型（如 `VassalOfferMapNotificationItemVM`、`PeaceOfferNotificationItemVM`）与各 `*OfferCampaignBehavior` 在决定是否弹出新提议前查询。

- **`NewLogEntryAdded(LogEntry log)`**（internal）
  - 用途：在日志条目新增时，如果条目实现了 `IChatNotification` 且可见，就提取其通知文本，按 `DiplomacyModel.GetNotificationColor` 取配色，转交 `InformationManager.DisplayMessage` 写到消息栏。
  - 副作用：经 core `InformationManager` 写消息日志（仅在 `_isSessionLaunched` 为 `true` 后生效）。
  - 调用时机：`LogEntryHistory` 新增 `LogEntry` 时调用；是战役日志到核心消息栏的桥接点。

- **`OnGameLoaded()`**
  - 用途：读档后清理 `_mapNotices` 中 `null` 或 `IsValid()` 为 `false` 的条目，并把剩余有效通知重新交给 `MBInformationManager.AddNotice` 恢复显示。
  - 副作用：重写/重建地图通知的底层注册。
  - 调用时机：战役读档完成时。

- **`RegisterEvents()` / `DeRegisterEvents()`**（internal）
  - 用途：切换 `_isSessionLaunched` 并在 `MBInformationManager.OnRemoveMapNotice` 上订阅/退订 `MapNoticeRemoved`，使 UI 移除地图通知时本类列表同步删除。
  - 副作用：修改事件订阅与 `_isSessionLaunched` 标志。
  - 调用时机：战役会话启动/结束时由 `Campaign` 调用。

### 对话通知（静态事件 API）

- **`event OnDisplayDialog`**（静态 `Func<TextObject, int, BasicCharacterObject, Equipment, MBInformationManager.NotificationPriority, string, MBInformationManager.DialogNotificationHandle>`）
  - 用途：UI 层订阅的对话通知入口；其调用结果是 `DialogNotificationHandle`（或 `null`，当无订阅者时）。`AddDialogLine` 触发它，`GetSoundPath` 计算出的语音路径作为最后一参传入。

- **`AddDialogLine(TextObject text, CharacterObject speakerCharacter, Equipment equipment = null, int extraTimeInMs = 0, MBInformationManager.NotificationPriority priority = MBInformationManager.NotificationPriority.Medium)`**（静态）
  - 用途：向对话/任务系统推送一条带说话者、装备与优先级的对话通知，返回供后续查询/清除的 `DialogNotificationHandle`。内部先 `Debug.Print` 文本，再 `Invoke` `OnDisplayDialog`（无订阅者时返回 `null`）。
  - 副作用：经事件总线交给订阅的 UI 播放（含语音路径解析）。
  - 调用时机：对话流程、任务或说服系统需要让玩家看到一条“对话气泡/通知”时。

- **`GetStatusOfDialogNotification(MBInformationManager.DialogNotificationHandle handle)`**（静态）
  - 用途：返回某对话通知的 `NotificationStatus`（活跃/排队/非活跃），无订阅者时回落为 `NotificationStatus.Inactive`。
  - 副作用：无。
  - 调用时机：UI 需要判断某条通知是否仍在播放时。

- **`ClearDialogNotification(MBInformationManager.DialogNotificationHandle handle, bool fadeOut = true)`**（静态）
  - 用途：按句柄清除单条对话通知；`fadeOut` 控制是否淡出。
  - 副作用：经 `OnClearDialogNotification` 事件通知 UI 移除。
  - 调用时机：对应对话/任务节点结束时。

- **`GetIsAnyDialogNotificationActiveOrQueued()`**（静态）
  - 用途：返回当前是否有任意对话通知处于活动或排队状态（`IsAnyDialogNotificationActiveOrQueued` 事件，无订阅者时为 `false`）。
  - 副作用：无。
  - 调用时机：界面判断是否可以安全关闭对话层时。

- **`ClearAllDialogNotifications(bool fadeOut)`**（静态）
  - 用途：清空所有对话通知；`fadeOut` 控制是否淡出。
  - 副作用：经 `OnClearAllDialogNotifications` 事件批量通知 UI。
  - 调用时机：玩家关闭相关界面、退出对话流程时。

## 示例

在战役行为中向玩家推送一条“宣战”地图通知，并在弹窗前确认同类通知是否已存在：

```csharp
// 向当前战役的地图通知列表加入一条宣战通知（WarMapNotification 为 InformationData 子类）
Campaign.Current.CampaignInformationManager
    .NewMapNoticeAdded(new WarMapNotification(faction1, faction2, declareWarLogEntry.GetEncyclopediaText()));

// 在界面或行为中检查是否已存在指向同一方的宣战通知，避免重复提示
Campaign.Current.CampaignInformationManager
    .InformationDataExists<WarMapNotification>(x => x.FactionMapEvent == faction2);
```

通过静态 API 向对话系统推送一条带语音的对话通知，并在结束时清空：

```csharp
// 静态调用：UI 层已订阅 OnDisplayDialog，会把这条通知播放给玩家
CampaignInformationManager.AddDialogLine(notificationText, speakerCharacter, speakerEquipment, 0, MBInformationManager.NotificationPriority.Medium);

// 玩家关闭相关界面时，清空所有仍处于活动或排队的对话通知
CampaignInformationManager.ClearAllDialogNotifications(fadeOut: true);
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [InformationManager](../../core-extra/InformationManager) · [MBInformationManager](../../core-extra/MBInformationManager) · [LogEntry](../LogEntry) · [LogEntryHistory](../LogEntryHistory) · [DefaultLogsCampaignBehavior](../DefaultLogsCampaignBehavior) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [ConversationManager](../ConversationManager)
