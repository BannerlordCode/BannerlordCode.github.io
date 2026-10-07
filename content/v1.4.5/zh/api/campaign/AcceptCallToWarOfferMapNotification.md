---
title: "AcceptCallToWarOfferMapNotification"
description: "接受宣战号召的地图通知：比结盟要约多带一个「被号召去打的王国」，玩家王国单人氏族时才发，否则直接进投票决议。"
---

# AcceptCallToWarOfferMapNotification

**Namespace:** `TaleWorlds.CampaignSystem.MapNotificationTypes`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AcceptCallToWarOfferMapNotification : InformationData`
**Base:** `InformationData`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapNotificationTypes/AcceptCallToWarOfferMapNotification.cs`

## 概述

`AcceptCallToWarOfferMapNotification` 是「盟友号召你一起对某国开战」那条地图通知。与同族的 [AllianceOfferMapNotification](../AllianceOfferMapNotification) 相比，它多带**一个** [Kingdom](../Kingdom)：`KingdomToCallToWarAgainst`——号召的对象王国是谁。所以读一条宣战号召通知需要三个信息：谁在号召（`OfferingKingdom`）、要打谁（`KingdomToCallToWarAgainst`）、什么时候过期（`TriggerTime`）。

发通知的门槛与结盟要约**完全一样**：`Clan.PlayerClan.Kingdom.Clans.Count == 1`。单人氏族阶段直接给个人提示；多氏族王国走 `AcceptCallToWarAgreementDecision` 决议投票。两者都继承同一套「24 小时过期」机制，因为 `TriggerTime` 都取自 `AllianceModel.DurationForOffers`。

## 心智模型

把它当成**「带目标的三元组 + 会过期的时钟」**。链路：

1. **谁决定发。** `AllianceCampaignBehavior.OnCallToWarAgreementProposedToPlayerKingdom`（`Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/AllianceCampaignBehavior.cs:232`）：

   ```csharp
   if (Clan.PlayerClan.Kingdom.Clans.Count == 1)
   {
       TextObject textObject = new TextObject("{=PneX4Ayw}A courier bearing a call to war offer from the {KINGDOM_NAME} against {KINGDOM_TO_CALL_TO_WAR_AGAINST} has arrived at the court of your realm.");
       textObject.SetTextVariable("KINGDOM_NAME", proposerKingdom.Name);
       textObject.SetTextVariable("KINGDOM_TO_CALL_TO_WAR_AGAINST", kingdomToCallToWarAgainst.Name);
       Campaign.Current.CampaignInformationManager.NewMapNoticeAdded(new AcceptCallToWarOfferMapNotification(proposerKingdom, kingdomToCallToWarAgainst, textObject));
       return;
   }
   ```

   注意这个分支里有 `return`——发出通知后**立刻结束方法**，根本不会走到下面创建 `AcceptCallToWarAgreementDecision` 的那几行。多氏族分支则相反：先 `FirstOrDefault` 找同 (callingKingdom, targetKingdom) 组合的既有决议，找到就先 `RemoveDecision` 移除，再 `new AcceptCallToWarAgreementDecision(...)` + `AddDecision(..., ignoreInfluenceCost: true)`。**同型重复提案靠「先删后加」去重，这是本通知与决议路径的分界线。**

2. **写 → 查表 → 过期。** `NewMapNoticeAdded` → `MapNotificationVM` 查 `_itemConstructors`（映射到 `AcceptCallToWarOfferNotificationItemVM`，`Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Map/MapNotificationVM.cs:132`）→ 读档时 `CampaignInformationManager.OnGameLoaded` 的 `RemoveAll(t => t == null || !t.IsValid())` 清掉过期项。

最关键的心智锚点仍然是**第二个单参构造器** `AcceptCallToWarOfferMapNotification(TextObject description)`。它**只调 `base(description)`**，三个字段全部留在默认值：`OfferingKingdom` = null、`KingdomToCallToWarAgainst` = null、`TriggerTime` = `CampaignTime.Zero`。这是存档反序列化形状，读出来的实例 `IsValid()` 恒 false，**读档即被丢弃**。用它发通知 = 发一张活不过一次存档的卡片。

第二个锚点是 **`TriggerTime` 的依赖**。三参构造器第 56 行无条件读 `Campaign.Current.Models.AllianceModel.DurationForOffers`，所以 `OnSubModuleLoad` 阶段构造会 NRE；单参构造器不读。

第三个锚点是 **VM 在 `OnFinalize()` 里有一个「顺手建决议」的副作用**。`AcceptCallToWarOfferNotificationItemVM.OnFinalize()` 先 `CampaignEventDispatcher.Instance.RemoveListeners(this)`，然后在 `_shouldDecisionBeCreatedOnClosed && Clan.PlayerClan.Kingdom != null && Clan.PlayerClan.Kingdom.Clans.Count > 1 && UnresolvedDecisions.FirstOrDefault(...CallingKingdom == _offeringKingdom) == null` 四个条件同时成立时，`new AcceptCallToWarAgreementDecision(Clan.PlayerClan, _offeringKingdom, _kingdomToCallToWarAgainst)`，**并且额外调一次 `CanMakeDecision(out var _)` 才 `AddDecision(..., ignoreInfluenceCost: true)`**。注意去重查询只比 `CallingKingdom`，**不比 `KingdomToCallToWarAgainst`**——同一号召国对两个不同目标国的提案，第二条会被第一名的存在挡住。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `OfferingKingdom` | `[SaveableProperty(1)] public Kingdom OfferingKingdom { get; private set; }` | 发号召的那个王国。**只有三参构造器赋值**，单参构造器留下 null。VM 的按钮回调把它与 `KingdomToCallToWarAgainst` 一起传给决议构造器。进存档引用表。 |
| `KingdomToCallToWarAgainst` | `[SaveableProperty(2)] public Kingdom KingdomToCallToWarAgainst { get; private set; }` | **本类型相对结盟要约多出来的那个字段**——号召要打的对象。`SaveableProperty` id 为 2，与结盟要约的 `TriggerTime` 撞号，但两者是不同类型、不共用存档槽。 |
| `TriggerTime` | `[SaveableProperty(3)] public CampaignTime TriggerTime { get; private set; }` | 过期时刻 = `CampaignTime.Now + AllianceModel.DurationForOffers`（默认 24 小时）。`IsValid()` 唯一判据。 |
| `IsValid` | `public override bool IsValid() => !TriggerTime.IsPast` | 覆盖基类恒 true。读档时 `OnGameLoaded` 的 `RemoveAll` 用它。**运行期不轮询。** |
| `TitleText` | `public override TextObject TitleText => new TextObject("{=ywL1bGlZ}Accept Call To War Offer")` | 标题，硬编码英文 + key，**每次访问 new 一个 `TextObject`**。 |
| `SoundEventPath` | `public override string SoundEventPath => "event:/ui/notification/peace_offer"` | 音效事件名，**与 [AllianceOfferMapNotification](../AllianceOfferMapNotification) 共用 `peace_offer`**。 |
| 构造器 A | `public AcceptCallToWarOfferMapNotification(Kingdom offeringKingdom, Kingdom kingdomToCallToWarAgainst, TextObject descriptionText)` | 调 `base(descriptionText)` → 赋值两个王国 → `TriggerTime = CampaignTime.Now + Campaign.Current.Models.AllianceModel.DurationForOffers`。**唯一可用于正常发通知的形状。** |
| 构造器 B | `public AcceptCallToWarOfferMapNotification(TextObject description)` | 只调 `base(description)`，**三个字段全留默认值**。存档反序列化形状；用它发通知会让卡片在下次读档时被 `IsValid()` 清掉。 |

## 真实示例

官方唯一构造形态，从 `AllianceCampaignBehavior.OnCallToWarAgreementProposedToPlayerKingdom` 照抄：

```csharp
if (Clan.PlayerClan.Kingdom.Clans.Count == 1)
{
    TextObject textObject = new TextObject("{=PneX4Ayw}A courier bearing a call to war offer from the {KINGDOM_NAME} against {KINGDOM_TO_CALL_TO_WAR_AGAINST} has arrived at the court of your realm.");
    textObject.SetTextVariable("KINGDOM_NAME", proposerKingdom.Name);
    textObject.SetTextVariable("KINGDOM_TO_CALL_TO_WAR_AGAINST", kingdomToCallToWarAgainst.Name);
    Campaign.Current.CampaignInformationManager.NewMapNoticeAdded(new AcceptCallToWarOfferMapNotification(proposerKingdom, kingdomToCallToWarAgainst, textObject));
    return;
}
```

查当前是否还有未处理的宣战号召，并核对其三元组是否自洽：

```csharp
bool pending = Campaign.Current.CampaignInformationManager.InformationDataExists<AcceptCallToWarOfferMapNotification>(null);
Debug.Print("pending call-to-war offers = " + pending, 0);
Debug.Print("window = " + Campaign.Current.Models.AllianceModel.DurationForOffers.ToString(), 0);
```

在 mod 里直接为玩家的多氏族王国补一条宣战号召通知（绕过决议、只发通知）：

```csharp
Kingdom calling = Kingdom.All.Find((Kingdom k) => k.StringId == "sturgia");
Kingdom target = Kingdom.All.Find((Kingdom k) => k.StringId == "empire");
if (calling != null && target != null)
{
    TextObject note = new TextObject("{=mykey4}{CALLER} calls your realm to war on {TARGET}.");
    note.SetTextVariable("CALLER", calling.Name);
    note.SetTextVariable("TARGET", target.Name);
    Campaign.Current.CampaignInformationManager.NewMapNoticeAdded(new AcceptCallToWarOfferMapNotification(calling, target, note));
}
```

## 风险与边界

- **单参构造器是个陷阱。** 三个字段全不赋值，`TriggerTime` 留在 `CampaignTime.Zero`，`IsValid()` 恒 false。**用它发通知 = 发一张下次读档就被删掉的卡片。**
- **构造器依赖 `Campaign.Current.Models.AllianceModel`。** 第 56 行无条件解引用。**`OnSubModuleLoad` 阶段构造会 NRE**；单参构造器不读它。
- **准入门槛是「玩家单人氏族」。** `Clans.Count == 1` 才发通知，并且发完就 `return`。多氏族王国走 `AcceptCallToWarAgreementDecision` 决议路线。
- **VM 有副作用。** `AcceptCallToWarOfferNotificationItemVM.OnFinalize()` 在四个条件同时成立时会顺带 `new AcceptCallToWarAgreementDecision(...)`、调 `CanMakeDecision`、再 `AddDecision`。**mod 里若自己 `new` 一个通知，得留意这条隐式建决议路径，以及它的去重查询只比 `CallingKingdom` 而不比目标国。**
- **`IsValid()` 只在读档时被批量调用。** `CampaignInformationManager.OnGameLoaded`（第 91 行）的 `RemoveAll(t => t == null || !t.IsValid())` 是唯一自动淘汰点。别假设 24 小时后卡片自动消失。
- **通知列表私有，无法直接枚举。** `CampaignInformationManager._mapNotices` 是 `private List<InformationData>`（第 25 行），公开出口只有 `NewMapNoticeAdded` 与 `InformationDataExists<T>`。
- **两个 `Kingdom` 字段都可能为 null。** 只有存档形状会这样，而 VM 的按钮回调会把它们直接喂给决议构造器。
- **`SaveableProperty` id 与结盟要约撞号。** 本类型用 1/2/3，[AllianceOfferMapNotification](../AllianceOfferMapNotification) 用 1/2。**不同类型各自独立编号，不要跨类型推断。**
- **必须注册 VM。** 未在 `_itemConstructors` 登记的类型被静默丢弃。
- **音效与结盟要约共用。** `event:/ui/notification/peace_offer` 同时服务两条通知。
- **`DurationForOffers` 是可换的 Model 值。** 换掉 `AllianceModel` 就换掉本类型寿命。

## 怎么用

### 怎么拿到它

**两个构造器分工完全不同，手写代码只能用三参的那个。** `AcceptCallToWarOfferMapNotification(Kingdom, Kingdom, TextObject)`（`:51`）给两个王国赋值，并把 `TriggerTime` 设成 `Campaign.Current.Models.AllianceModel.DurationForOffers` 之上的当前时刻（`:56`）。单参的 `AcceptCallToWarOfferMapNotification(TextObject)`（`:59`）**一个字段都不赋值**，它只是存档反序列化时绕过构造逻辑用的通道。

**官方构造点只有一个**：`AllianceCampaignBehavior.cs:239` 的 `Campaign.Current.CampaignInformationManager.NewMapNoticeAdded(new AcceptCallToWarOfferMapNotification(proposerKingdom, kingdomToCallToWarAgainst, textObject))`。`NewMapNoticeAdded`（`CampaignInformationManager.cs:100`）本身只是转手调 `AddInformationData`（`:102`）。

### 典型用法

发出去之后能不能被玩家看见，取决于一张**精确类型查表**。`MapNotificationVM.GetNotificationFromData`（`MapNotificationVM.cs:193`）取 `data.GetType()`（`:195`），在 `_itemConstructors` 里查（`:197`），命中才 `Activator.CreateInstance`（`:199`）并挂 `OnRemove` / `OnFocus`（`:202`-`:203`）；**没命中就返回 null，上游 `:178` 的判空直接 return**——通知进了 `_mapNotices` 但 UI 上一声不吭。本类型的注册在 `MapNotificationVM.cs:132`。

所以「发了却看不见」的排查顺序是：先查 VM 注册，再查 `IsValid()`。本类型 override 了它（`:64`），判据只有 `!TriggerTime.IsPast`（`:66`）——**它不看王国关系、不看玩家有没有点掉**。想在发通知的同一帧就自检这两件事：

```csharp
public static class CallToWarNoticeSelfCheck
{
    public static void Emit(Kingdom caller, Kingdom target)
    {
        TextObject note = new TextObject("{=pP0SelfChk}Self check notice for {CALLER}.");
        note.SetTextVariable("CALLER", caller.Name);
        AcceptCallToWarOfferMapNotification notice = new AcceptCallToWarOfferMapNotification(caller, target, note);
        Debug.Print("trigger=" + notice.TriggerTime + " valid=" + notice.IsValid(), 0);
        Campaign.Current.CampaignInformationManager.NewMapNoticeAdded(notice);
    }
}
```

`TriggerTime` 是 `private set` 的 `SaveableProperty(3)`（`:16`-`:17`），**只能由构造器或存档系统写**。想延长窗口就得换 `Campaign.Current.Models.AllianceModel.DurationForOffers`，改这一个 Model 值比改每一个通知实例现实得多。

### 最容易踩的坑

**单参构造器是个陷阱。** 三个字段全不赋值，`TriggerTime` 留在 `CampaignTime.Zero`，`IsValid()` 恒 false。**用它发通知 = 发一张下次读档就被删掉的卡片。**

## 跨版本提示

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapNotificationTypes/AcceptCallToWarOfferMapNotification.cs` 是 68 行、8 个公开成员，`SaveableProperty` id 为 1/2/3。1.4.6 同名文件公开表面一致。1.3.15 侧无同名文件。

默认时长同样来自 [DefaultAllianceModel](../DefaultAllianceModel) 的 `DurationForOffers => CampaignTime.Hours(24f)`（`Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultAllianceModel.cs:117`），与 [AllianceOfferMapNotification](../AllianceOfferMapNotification) 同一来源。

## 依赖关系

- 基类：[InformationData](../../core-extra/InformationData) 提供 `DescriptionText`（`[SaveableField(2)]`）、抽象 `TitleText` / `SoundEventPath`、以及默认恒 true 的 `IsValid()`
- 时长来源：[AllianceModel](../AllianceModel).DurationForOffers，官方实现 [DefaultAllianceModel](../DefaultAllianceModel) 第 117 行
- 唯一构造点：[AllianceCampaignBehavior](../AllianceCampaignBehavior).OnCallToWarAgreementProposedToPlayerKingdom（`Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/AllianceCampaignBehavior.cs:232`）
- 决议侧替代路径：[AcceptCallToWarAgreementDecision](../AcceptCallToWarAgreementDecision)，由 VM 关闭通知时或官方多氏族分支里 `new` + `AddDecision(..., ignoreInfluenceCost: true)`
- 载荷：两个 [Kingdom](../Kingdom)（`OfferingKingdom` 与 `KingdomToCallToWarAgainst`），准入判断读 [Clan](../Clan).PlayerClan.Kingdom.Clans.Count
- 写入与淘汰：[CampaignInformationManager](../CampaignInformationManager) 的 `NewMapNoticeAdded` / `InformationDataExists<T>`，以及 `OnGameLoaded` 的 `RemoveAll`
- UI 映射：`_itemConstructors.Add(typeof(AcceptCallToWarOfferMapNotification), typeof(AcceptCallToWarOfferNotificationItemVM))`（`Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Map/MapNotificationVM.cs:132`）
- 真正落地的战争状态：同文件里 `AllianceCampaignBehavior.StartCallToWarAgreement` / `DenyCallToWarAgreement`
