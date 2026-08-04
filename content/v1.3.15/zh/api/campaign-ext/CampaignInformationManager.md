---
title: "CampaignInformationManager"
description: "战役层的信息桥接器：保存地图通知、把日志转成玩家提示，并把对话通知转发给 UI。"
---
# CampaignInformationManager

**命名空间：** `TaleWorlds.CampaignSystem`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public class CampaignInformationManager`  
**基类：** `System.Object`  
**源码：** `TaleWorlds.CampaignSystem/CampaignInformationManager.cs`  
**权威语义：** 1.3.15；1.4.5 的职责与调用边界相同

## 一句话职责

它是 `Campaign` 持有的战役信息中转站：把可持久化的地图通知交给 `MBInformationManager`，把满足条件的战役日志变成玩家提示，并把对话通知的静态事件转发给 UI 层。

## 心智模型

`CampaignInformationManager` 不是通用日志器，也不是 UI 控件。`Campaign` 在初始化时创建一个实例并持有它；实例内部保存 `_mapNotices`，这个列表会作为战役存档的一部分恢复。战役启动时 `RegisterEvents` 把它接到 `MBInformationManager.OnRemoveMapNotice`，退出或切换会话时 `DeRegisterEvents` 断开该订阅。

```text
Campaign
  └─ CampaignInformationManager
       ├─ _mapNotices ([InformationData]，存档字段)
       │    └─ MBInformationManager.AddNotice → 地图通知 UI
       ├─ LogEntryHistory → NewLogEntryAdded → InformationManager.DisplayMessage
       └─ 静态对话事件 → Campaign UI / Gauntlet 订阅者
```

它处在 Campaign 层和玩家反馈层之间。需要创建可在地图通知面板中持续存在的 `InformationData` 时使用 `NewMapNoticeAdded`；需要普通即时提示时直接使用 [InformationManager](../../core-extra/InformationManager)，不要绕过它写私有列表。查询某类通知是否已经排队时使用 `InformationDataExists<T>`，不要重新构造一份通知来猜测状态。

## 何时使用，何时不要用

**适合使用：**

- 在 `CampaignBehavior` 中创建一条需要由玩家稍后点击处理的地图通知。
- 在加载存档后让有效的通知重新注册到 `MBInformationManager`。
- 通过 `InformationDataExists<T>` 防止同一英雄、王国或决策重复排队。
- 在已经有 Campaign UI 订阅者的阶段，通过 `AddDialogLine` 等静态入口驱动对话通知。

**不要使用：**

- 把 `NewLogEntryAdded` 当成公开日志写入 API。日志应由 `LogEntryHistory` 和相应的 `CampaignBehavior` 产生；它只负责把可见的 `IChatNotification` 转成提示。
- 用 `_mapNotices` 或反射直接增删存档字段。应通过 `NewMapNoticeAdded` 和通知对象自身的生命周期工作。
- 在主菜单、加载尚未完成或战役已经卸载时调用地图通知或对话通知入口。此时 UI 事件可能没有订阅者，或者旧实例已经解除事件。
- 用这里的对话通知入口代替战役状态变更。改变关系、战争、所有权等状态必须走对应的 `*Action.Apply`，通知只是结果的呈现。

## 依赖关系

| 方向 | 类型/系统 | 关系 |
|---|---|---|
| 创建与持有 | [Campaign](../../campaign/Campaign) | 初始化时创建并暴露 `CampaignInformationManager` 属性；结束会话时调用 `DeRegisterEvents` |
| 地图通知输入 | [InformationData](../../core-extra/InformationData) | `NewMapNoticeAdded` 接受具体通知类型并保存引用 |
| 地图通知输出 | [MBInformationManager](../../core-extra/MBInformationManager) | 加入/移除地图通知，真正的地图面板由更下层处理 |
| 即时提示输出 | [InformationManager](../../core-extra/InformationManager) | 可见的 `IChatNotification` 最终通过 `DisplayMessage` 显示 |
| 事件来源 | [CampaignEvents](../CampaignEvents)、[CampaignBehaviorBase](../CampaignBehaviorBase) | 行为在正确的战役事件时机创建通知 |
| 日志来源 | `LogEntryHistory`、`IChatNotification` | 日志添加后调用 `NewLogEntryAdded`；只有可见聊天通知才变成提示 |
| 本地化/语音 | [TextObject](../../localization/TextObject)、[VoiceOverModel](../VoiceOverModel) | 对话文本和角色语音路径由模型解析 |
| 存档 | [SaveableCampaignTypeDefiner](../SaveableCampaignTypeDefiner)、`[SaveableField(10)]` | `_mapNotices` 被注册为 `CampaignInformationManager` 的持久化成员 |

## 生命周期与关键成员

### 创建、注册和加载

- `Campaign` 创建实例并将其作为自身的持久化成员保存；不要在 mod 中自行 `new` 一个实例替换它。
- `RegisterEvents()` 将 `_isSessionLaunched` 设为 `true`，并订阅 `MBInformationManager.OnRemoveMapNotice`。这是地图通知能从内部列表同步移除的阶段。
- `DeRegisterEvents()` 将 `_isSessionLaunched` 设为 `false` 并解除订阅。它是会话结束时的清理边界，不应在正常战役中反复调用。
- `OnGameLoaded()` 会删除无效的 `InformationData`，再把剩余通知重新交给 `MBInformationManager.AddNotice`。它解决的是存档加载后的 UI 重建，不是新建通知的入口。

### 地图通知

- `NewMapNoticeAdded(InformationData informationData)` 将通知加入 `_mapNotices`，随后调用 `MBInformationManager.AddNotice`。通知对象必须是可保存且可判定有效的真实 `InformationData` 子类。
- `InformationDataExists<T>(Func<T, bool> predicate)` 只在当前持久化列表中查询指定通知类型。`predicate` 可以按英雄、王国、党派等业务身份去重；传入 `null` 表示该类型存在即可。
- `NoticeType` 是通知类型标签（如战争公告、和平公告、领主改旗和交易公告）。它描述通知分类，不会替 mod 自动创建通知对象。

### 日志与对话桥接

- `NewLogEntryAdded(LogEntry log)` 只在会话已启动且 `log` 实现 `IChatNotification`、同时 `IsVisibleNotification` 为真时显示提示；颜色来自 `Campaign.Current.Models.DiplomacyModel.GetNotificationColor`。
- `AddDialogLine(...)` 通过 `OnDisplayDialog` 调用 UI 订阅者，并先根据 `TextObject` 与 `CharacterObject` 查询语音路径。没有订阅者时返回 `null`。
- `GetStatusOfDialogNotification(handle)` 在没有订阅者时返回 `Inactive`；这不是对话一定已经结束的强证明，而是“当前桥接没有活动 UI”的安全默认值。
- `ClearDialogNotification(handle, fadeOut)`、`ClearAllDialogNotifications(fadeOut)` 只通知 UI 清理显示状态，不撤销 Campaign 逻辑。
- `GetIsAnyDialogNotificationActiveOrQueued()` 在没有 UI 订阅者时返回 `false`，适合在发起通知前做保护性检查。

## 真实示例

### 示例 1：CampaignBehavior 添加一条可点击地图通知

原版 `AllianceCampaignBehavior` 在联盟提议送达玩家王国时，从 `Campaign.Current` 获取该管理器并创建真实的 `AllianceOfferMapNotification`：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapNotificationTypes;
using TaleWorlds.Localization;

private void QueueAllianceNotice(Kingdom offeringKingdom)
{
    TextObject text = new TextObject(
        "{=my_mod_alliance_notice}A courier bearing an alliance offer has arrived.");

    Campaign.Current.CampaignInformationManager.NewMapNoticeAdded(
        new AllianceOfferMapNotification(offeringKingdom, text));
}
```

真实调用点：`TaleWorlds.CampaignSystem/CampaignBehaviors/AllianceCampaignBehavior.cs` 的 `IAllianceCampaignBehavior.OnAllianceOfferedToPlayerKingdom`。

### 示例 2：按业务身份避免重复通知

原版地图通知 VM 会使用管理器的泛型查询；mod 也应从当前战役实例查询，而不是维护一个与存档无关的静态布尔值：

```csharp
private void QueueVassalOfferNotice(Kingdom kingdomToOffer, TextObject offerText)
{
    bool alreadyQueued = Campaign.Current.CampaignInformationManager
        .InformationDataExists<VassalOfferMapNotification>(
            notification => notification.OfferedKingdom == kingdomToOffer);

    if (!alreadyQueued)
    {
        Campaign.Current.CampaignInformationManager.NewMapNoticeAdded(
            new VassalOfferMapNotification(kingdomToOffer, offerText));
    }
}
```

真实调用点：`VassalOfferMapNotificationItemVM` 和 `VassalAndMercenaryOfferCampaignBehavior` 分别负责查询和创建。

## 风险与崩溃边界

- **存档引用必须稳定。** `_mapNotices` 是 `[SaveableField(10)]`，其元素会随战役保存。把临时 UI 对象、未注册的自定义 `InformationData` 或带失效外部引用的对象放进去，可能导致加载时对象无效、通知无法恢复，严重时破坏存档读取。
- **必须通过管理器加入通知。** 直接调用 `MBInformationManager.AddNotice` 只更新 UI/运行时队列，不会把对象加入 `_mapNotices`；玩家保存后通知会丢失，加载后也无法去重。
- **会话生命周期不可跨越。** `DeRegisterEvents` 后旧管理器不再接收移除回调；保存旧实例、在静态回调中捕获它或在下一局继续使用，可能把通知操作导向已卸载的 UI。
- **通知去重必须使用稳定身份。** 只比较对象引用不能覆盖存档加载后重建的对象；优先比较 `Hero`、`Kingdom`、`Settlement` 等可持久化身份，且要在创建通知前查询。
- **对话句柄不是 Campaign 状态。** `DialogNotificationHandle` 只代表 UI 桥接返回值。`GetStatusOfDialogNotification` 没有订阅者时返回 `Inactive`，不要把它当作战役事件完成条件，也不要在 UI 已销毁后无条件清理旧句柄。
- **语音解析可能失败。** `AddDialogLine` 会调用 `MBTextManager.TryGetVoiceObject` 和 `VoiceOverModel.GetSoundPathForCharacter`；缺少语音对象时源码会触发断言并返回 `null`。传入可本地化的真实文本与正确的角色上下文，并允许没有音频时退化为普通文本。
- **不要在高频 tick 中堆通知。** 地图通知会保存并进入 UI 队列；在 `HourlyTick`/`DailyTick` 中无条件创建会造成重复、存档膨胀和玩家无法清空的通知洪水。

## 跨版本提示

1.4.5 仍由 `Campaign` 持有该管理器，地图通知保存在战役状态中，UI 通过 `MBInformationManager` 桥接。写跨版本 mod 时应依赖这些公开边界，不要依赖反编译文件中的 token 或私有字段布局；若通知类型在目标版本不存在，应使用该版本实际存在的 `InformationData` 子类。

## ↑ 父级导航

- [CampaignSystem API](../)
- [Campaign](../../campaign/Campaign) — 创建、持有并管理会话生命周期
- [CampaignEvents](../CampaignEvents) — 事件时机与行为订阅

## ↔ 同级导航

| 页面 | 关系 |
|---|---|
| [InformationData](../../core-extra/InformationData) | 地图通知的持久化载荷基类 |
| [MBInformationManager](../../core-extra/MBInformationManager) | 地图通知与即时 UI 的下游桥接 |
| [InformationManager](../../core-extra/InformationManager) | `IChatNotification` 的即时提示出口 |
| [CampaignBehaviorBase](../CampaignBehaviorBase) | mod 通常创建通知的生命周期入口 |
| [SaveableCampaignTypeDefiner](../SaveableCampaignTypeDefiner) | 注册本管理器及其保存成员 |

## 参见

- [开发者任务路线图](../../../architecture/developer-roadmap)
- [崩溃与存档边界](../../../architecture/crash-boundaries)
- [存档系统](../../../architecture/save-system)
