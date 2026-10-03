---
title: "AcceptCallToWarOfferNotificationItemVM"
description: "号召参战通知的地图通知条目：构造时挂五个 CampaignEvents 自监听，OnFinalize 摘监听并按 _shouldDecisionBeCreatedOnClosed 决定要不要补一条 KingdomDecision。NotificationIdentifier 被误写成 \"ransom\"。"
---

# AcceptCallToWarOfferNotificationItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes`
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class AcceptCallToWarOfferNotificationItemVM : MapNotificationItemBaseVM`
**Base:** `MapNotificationItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationTypes/AcceptCallToWarOfferNotificationItemVM.cs`（全文 134 行）

## 概述

这个类本身几乎不携带数据。它的全部体积在两处：构造器（第 17–46 行）把五个 `CampaignEvents` 静态事件挂到 `this` 上、把 `_onInspect` 装成一整套「先判断、要么走要么弃」的闭包；`OnFinalize`（第 106–123 行）摘掉这些监听，并按 `_shouldDecisionBeCreatedOnClosed` 决定要不要给玩家的王国补一条 [AcceptCallToWarAgreementDecision](../../campaign/AcceptCallToWarAgreementDecision)。

三个字段全是私有的、且两个是 `readonly`：`readonly Kingdom _offeringKingdom`、`readonly Kingdom _kingdomToCallToWarAgainst`、`bool _shouldDecisionBeCreatedOnClosed`。也就是说**外部没有任何 public 属性能读到「谁号召、打谁」**——想拿这两个王国，只能自己再读一遍 [AcceptCallToWarOfferMapNotification](../../campaign/AcceptCallToWarOfferMapNotification)。

## 心智模型

**把它想成一张「会自己判断过期时间的地图通知」，而不是一个被动的数据行。**

地图通知的通用生命周期写在基类 [MapNotificationItemBaseVM](../MapNotificationItemBaseVM) 里：`Activator.CreateInstance` 造出来后，`MapNotificationVM` 会把 `OnRemove`、`OnFocus`、`NavigationHandler`、`FastMoveCameraToPosition` 四个回调挂上；玩家点它就调 `ExecuteAction()` → 执行 `_onInspect`；玩家右键就调 `ExecuteRemove()` → 通知从列表里消失，随后 VM 走 `OnFinalize` 被清理。**本类做的全部工作，就是给 `_onInspect` 写一个正确的实现，并保证无论从哪条路消失，监听都不残留。**

`_onInspect` 的逻辑是三段：

1. `data != null && data.IsValid() && Clan.PlayerClan.Kingdom != null` 三个前置全过，再 `new AcceptCallToWarAgreementDecision(Clan.PlayerClan, _offeringKingdom, _kingdomToCallToWarAgainst).CanMakeDecision(out textObject)` 试一把，得到 `flag`；
2. `flag` 为真 → `Campaign.Current.GetCampaignBehavior<IAllianceCampaignBehavior>().OnCallToWarAgreementProposedToPlayer(...)`，把决定权交给王国决策系统，然后移除通知；
3. `flag` 为假 → 弹一句 "This call to war offer is no longer relevant."，然后同样移除通知。

**第三段是本类最重要的行为：条件不成立时它不静默失败，而是明确告诉玩家「过期了」，然后自己消失。** 这是 `IsValid()` 存在的原因——通知可能在玩家还没点它之前就已经因为宣战/和谈而失效。

五个自监听事件对应五个失效条件：`WarDeclared`（已开打）、`MakePeace`（两家讲和）、`KingdomDestroyedEvent`（任一方覆灭）、`OnAllianceEndedEvent`（盟友散了）、`OnClanChangedKingdomEvent`（玩家换王国）。**其中 `OnClanChangedKingdom` 有唯一的「不销毁而是转移」分支**：

```csharp
private void OnClanChangedKingdom(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, ...)
{
    if (clan == Clan.PlayerClan) { this.RemoveAcceptCallToWarOfferNotification(false); return; }
    if (newKingdom == Clan.PlayerClan.Kingdom) { this.RemoveAcceptCallToWarOfferNotification(true); }
}
```

第二个分支是**别的氏族加入了玩家的王国**。这时它不把通知当垃圾丢掉，而是把 `_shouldDecisionBeCreatedOnClosed` 置 `true` 再移除。`OnFinalize` 看到这个标记，就去玩家的王国里补一条真正的 `AcceptCallToWarAgreementDecision` 决策，让玩家在王国面板上继续处理。**换句话说：地图通知是入口，王国决策是归宿，这条通知在中间做了一次「升级成决策」的接力。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造 | `public AcceptCallToWarOfferNotificationItemVM(AcceptCallToWarOfferMapNotification data)` | 参数类型被写死成 `AcceptCallToWarOfferMapNotification`，因为 `MapNotificationVM.GetNotificationFromData` 用 `Activator.CreateInstance(vmType, new object[] { data })` 反射构造，**参数必须是单个 `InformationData` 派生类**。子类若换掉参数形状，反射直接抛异常。 |
| `OnFinalize` | `public override void OnFinalize()` | 唯一的 public 方法。顺序固定：先 `CampaignEventDispatcher.Instance.RemoveListeners(this)` 清掉本对象在事件系统里的全部注册，再判 `_shouldDecisionBeCreatedOnClosed`。**只被 `MapNotificationVM` 在移除通知时调用，mod 直接 new 一个实例再手动调它是没有意义的。** |

私有成员（不写在 API 表里，但决定行为）：`_offeringKingdom` / `_kingdomToCallToWarAgainst` 两个 `readonly Kingdom`、`_shouldDecisionBeCreatedOnClosed`，以及 `OnWarDeclared` / `OnPeaceDeclared` / `OnAllianceEnded` / `OnKingdomDestroyed` / `OnClanChangedKingdom` / `RemoveAcceptCallToWarOfferNotification` 六个私有方法。

继承来、但这一页的行为依赖它们的成员：`NotificationIdentifier`（构造器末尾被写成 `"ransom"`）、`_onInspect`、`ExecuteRemove()`、`NavigationHandler`、`Data`。

## 真实示例

mod 要在地图通知里加一条自己的「号召参战」，就得自己写一个 `InformationData` 派生类、一个 `MapNotificationItemBaseVM` 派生类，再通过 [MapNotificationVM](../MapNotificationVM) 的公开注册表挂进去。**构造器必须保持单参数形状**——这是 `Activator` 反射的硬要求。

```csharp
using TaleWorlds.Core;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapNotificationTypes;
using TaleWorlds.CampaignSystem.ViewModelCollection.Map;
using TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes;
using TaleWorlds.Localization;

// 数据侧：复用官方的号召参战通知，只为了继承它的 TitleText / SoundEventPath
public class MyCallToWarMapNotification : AcceptCallToWarOfferMapNotification
{
    public MyCallToWarMapNotification(Kingdom caller, Kingdom target, TextObject description)
        : base(caller, target, description)
    {
    }
}

// VM 侧：照抄官方的形状 —— 单参构造 + NotificationIdentifier + _onInspect
public class MyCallToWarItemVM : MapNotificationItemBaseVM
{
    private readonly Kingdom _caller;

    public MyCallToWarItemVM(MyCallToWarMapNotification data)
        : base(data)
    {
        this._caller = data.OfferingKingdom;
        this.NotificationIdentifier = "my_call_to_war";
        this._onInspect = delegate
        {
            Debug.Print("号召方 " + this._caller.Name);
        };
    }
}

public static class MyNotificationInstaller
{
    // 注册在拿到 MapNotificationVM 之后做，也就是地图界面已打开时。
    // 官方自己是在 MapNotificationVM 构造器里用同一张字典表 PopulateTypeDictionary 的。
    public static void Install(MapNotificationVM mapNotificationVm)
    {
        mapNotificationVm.RegisterMapNotificationType(
            typeof(MyCallToWarMapNotification), typeof(MyCallToWarItemVM));
    }

    // 推送：MBInformationManager.AddNotice 会触发 MapNotificationVM 的 OnAddMapNotice 订阅
    public static void Push(Kingdom caller, Kingdom target)
    {
        MBInformationManager.AddNotice(
            new MyCallToWarMapNotification(caller, target, new TextObject("{=aBcDeF12}请求参战", null)));
    }
}
```

三个形状约束在上面的代码里都能看到：数据类继承 `InformationData` 的具体子类、`VM` 构造器只收一个 `data`、注册表是 `RegisterMapNotificationType(Type data, Type item)`。**缺任何一个，通知都不会出现在地图上**——类型没在字典里，`GetNotificationFromData` 会静默返回 `null`。

## 风险与边界

- **`NotificationIdentifier` 被写成 `"ransom"`，和 [AllianceOfferNotificationItemVM](../AllianceOfferNotificationItemVM) 完全一样**（本类第 45 行）。这是 UI 侧选 prefab 的键，两个类共用同一个意味着在界面上它们不区分。想要独立外观只能自己派生子类并覆盖这个值。
- **`OnFinalize` 里的 `RemoveListeners(this)` 是「按监听者对象」清空的**，会把 `this` 在**整个 `CampaignEvents` 系统**里的注册一并摘掉，不止这五个。想在派生类里挂第六个监听，`OnFinalize` 必须先调 `base.OnFinalize()` 再自己清。
- **补决策有三重门槛**：`Clan.PlayerClan.Kingdom != null` && `Clan.PlayerClan.Kingdom.Clans.Count > 1` && `UnresolvedDecisions` 里没有同 `CallingKingdom` 的未决 `AcceptCallToWarAgreementDecision`。玩家是唯一氏族时这条通知就真的什么都不留。
- **`_shouldDecisionBeCreatedOnClosed` 只有一条路径会置 `true`**（别的氏族加入玩家王国）。宣战、和谈、覆灭、解盟、玩家自己换王国，全部传 `false`，也就是通知直接消失不补决策。
- **构造期间 `Campaign.Current` 可能还没准备好**。基类构造器在派生构造器体之前就跑完了 `RefreshValues()`，派生 ctor 里访问 `Campaign.Current` 是安全的，但那是基类已经做完的事，不是你的字段。
- **`OnFinalize` 里创建决策属于「界面关闭时的副作用」**，它在 `MapNotificationVM` 的移除路径里同步执行。`AddDecision(decision, true)` 第二个参数是 `ignoreInfluenceCost`，这里传的是 `true`，**补出来的决策不扣影响力**。
- **`data.IsValid()` 是虚方法**，1.3.0 里 [AcceptCallToWarOfferMapNotification](../../campaign/AcceptCallToWarOfferMapNotification) 有两个构造器：无参版（只带描述文本）默认 `IsValid()` 为真，带 `offeringKingdom`/`kingdomToCallToWarAgainst` 的版本才带真实校验。造数据时选错构造器会造出一条永远「有效」但没有任何王国的通知。

## 跨版本提示

**本类的 public 面在 1.3.0 → 1.5.3 五棵树里零变化**：只有一个构造器加一个 `public override void OnFinalize()`。1.3.15 起 decompiled 源码排版从「构造器签名同行」拆成两行，1.4.6 行数从 135 涨到 140、1.5.3 涨到 43 行差异，但都是私有实现与 Token 注释重排。

**真正会咬人的是它调用的上游 API 变了两次：**

- `CanMakeDecision(out TextObject)` → 1.3.15 起变成 `CanMakeDecision(out TextObject, bool)`，本类内部的调用也跟着多传一个字面量 `false`。你抄这段代码到新版会编译不过——**必须按目标版本的 `KingdomDecision.CanMakeDecision` 签名写**。
- `Campaign.Current.GetCampaignBehavior<IAllianceCampaignBehavior>()` 在 1.5.3 被包了 null 检查后再调 `OnCallToWarAgreementProposedToPlayer`。1.3.0 是裸调，**行为没被注册时会 NullReferenceException**。
- 本地化串从无 key 的 `{=*}` 改成 `{=oGgjuQav}`（1.3.15 起）。1.3.0 这句是硬编码英文，不走语言文件。

## 依赖关系

- 基类与生命周期：[MapNotificationItemBaseVM](../MapNotificationItemBaseVM) 持有 `ExecuteAction` / `ExecuteRemove` / `_onInspect` / `NavigationHandler`；[ViewModel](../../core-extra/ViewModel) 是它的 UI 绑定底座
- 注册表与持有者：[MapNotificationVM](../MapNotificationVM) 的 `PopulateTypeDictionary` 与 `RegisterMapNotificationType(Type, Type)` 决定本类何时被 `Activator` 造出来
- 输入数据：[AcceptCallToWarOfferMapNotification](../../campaign/AcceptCallToWarOfferMapNotification) 提供 `OfferingKingdom` / `KingdomToCallToWarAgainst` / `IsValid()`
- 决策落点：[AcceptCallToWarAgreementDecision](../../campaign/AcceptCallToWarAgreementDecision) 是 `_onInspect` 与 `OnFinalize` 共同构造的对象，宿主是 [KingdomDecision](../../campaign/KingdomDecision)
- 交棒对象：[IAllianceCampaignBehavior](../../campaign/IAllianceCampaignBehavior) 的 `OnCallToWarAgreementProposedToPlayer` 接管后续流程
- 失效事件源：[CampaignEvents](../../campaign/CampaignEvents) 的 `WarDeclared` / `MakePeace` / `KingdomDestroyedEvent` / `OnAllianceEndedEvent` / `OnClanChangedKingdomEvent`
- 玩家身份：[Clan](../../campaign/Clan).PlayerClan 与 [Hero](../../campaign/Hero).MainHero 在每个分支里被反复比较
- 同族实现：[AllianceOfferNotificationItemVM](../AllianceOfferNotificationItemVM) 是本类的孪生结构，差别只在「结盟」与「号召参战」两个王国参数
- 桶首页：[viewmodel API 分区](../)
