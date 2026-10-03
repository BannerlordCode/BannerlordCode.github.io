---
title: "AlleyLeaderDiedMapNotificationItemVM"
description: "「暗巷失去主人」地图通知条目：整个类零 public 成员，唯一行为藏在 _onInspect 里——点开会弹一个 Inquiry，选项按钮直接把玩家送到氏族页面指派新主人。"
---

# AlleyLeaderDiedMapNotificationItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes`
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class AlleyLeaderDiedMapNotificationItemVM : MapNotificationItemBaseVM`
**Base:** `MapNotificationItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationTypes/AlleyLeaderDiedMapNotificationItemVM.cs`（全文 44 行）

## 概述

**这是本批里最短的一页：全文 44 行，零个 public/protected 成员声明。** 它的全部存在理由是构造器里那一行 `this._onInspect = new Action(this.CreateAlleyLeaderDiedPopUp);`——**基类 [MapNotificationItemBaseVM](../MapNotificationItemBaseVM) 只有一个 `protected Action _onInspect` 字段和 `public void ExecuteAction()`，本类不写这一行，这条通知点开就什么都不会发生。**

它与同族通知的最大区别是**行为不放在点击瞬间，而是放进一个二选一的确认框里**：

```csharp
private void CreateAlleyLeaderDiedPopUp()
{
    object title = new TextObject("{=6QoSHiWC}An alley without a leader", null);
    TextObject body = new TextObject("{=FzbeSkBb}One of your alleys has lost its leader ...", null);
    body.SetTextVariable("DAYS", (int)Campaign.Current.Models.AlleyModel.DestroyAlleyAfterDaysWhenLeaderIsDeath.ToDays);
    TextObject learnMore = new TextObject("{=jVLJTuwl}Learn more", null);
    InformationManager.ShowInquiry(new InquiryData(title.ToString(), body.ToString(),
        true, true, learnMore.ToString(),
        GameTexts.FindText("str_dismiss", null).ToString(),
        new Action(this.OpenClanScreenAfterAlleyLeaderDeath),
        new Action(base.ExecuteRemove),
        "", 0f, null, null, null), false, false);
}
```

`InquiryData` 的构造参数从第三个开始是 `isAffirmativeWithConfirmation` / `isNegativeWithConfirmation` / `affirmativeText` / `negativeText` / `affirmativeAction` / `negativeAction`。所以这个框是：**「了解更多」→ 打开氏族页面；「关闭」→ 只把通知删掉**。

## 心智模型

**把它想成「一个把玩家推向另一个界面的路牌」。** 它的文案里有一个动态变量 `{DAYS}`，值来自 [AlleyModel](../../campaign/AlleyModel) 的 `DestroyAlleyAfterDaysWhenLeaderIsDeath`（一个 `CampaignTime`）转 `.ToDays` 取整——也就是「主人死后还剩几天暗巷被废弃」。这个数字是 [IAlleyCampaignBehavior](../../campaign/IAlleyCampaignBehavior) 真正执行废弃逻辑时用的同一份配置，**所以文案里的倒计时和行为上的倒计时一定一致**。

第二个私有方法 `OpenClanScreenAfterAlleyLeaderDeath` 是那个 affirmative 动作：

```csharp
private void OpenClanScreenAfterAlleyLeaderDeath()
{
    if (base.NavigationHandler != null && this._alley != null)
    {
        base.NavigationHandler.OpenClan(this._alley);
        base.ExecuteRemove();
    }
}
```

**注意它的判空顺序：`NavigationHandler` 先判。** `NavigationHandler` 是由 [MapNotificationVM](../MapNotificationVM) 在造出实例后通过 `SetNavigationHandler` 挂上来的——**如果你的通知是在那个流程之外被 new 出来的，这个委托是 null，按钮点了会静默无效**（连通知都不会消失，因为 `ExecuteRemove()` 在 if 里面）。而 `_alley` 是构造器里从 `data.Alley` 存的，正常路径不会为 null。

**负向动作 `base.ExecuteRemove()` 就是基类的那个方法**，它会触发 `OnRemove` 回调让 `MapNotificationVM` 把自己从列表里摘掉，然后 `OnFinalize`。**本类没有覆写 `OnFinalize`**——因为它一个 `CampaignEvents` 监听都没挂，不需要清理。

`NotificationIdentifier` 被设为 `"alley_leader_died"`（第 17 行），**这是三个暗巷通知里唯一一个写了有辨识度的字符串的**（另两个通知把 identifier 误写成了 `"ransom"`）。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造 | `public AlleyLeaderDiedMapNotificationItemVM(AlleyLeaderDiedMapNotification data)` | **本类唯一的 public 成员。** 三件事：从 `data.Alley` 存下 `_alley`；设 `NotificationIdentifier = "alley_leader_died"`；把 `_onInspect` 指向 `CreateAlleyLeaderDiedPopUp`。由 [MapNotificationVM](../MapNotificationVM) 的 `Activator.CreateInstance(vmType, new object[] { data })` 反射调用，**参数必须是单个数据对象**。 |

私有成员（决定行为但不在 API 面）：`CreateAlleyLeaderDiedPopUp()`、`OpenClanScreenAfterAlleyLeaderDeath()` 两个方法，以及 `private Alley _alley` 字段。

继承来、但本页行为依赖它们的成员：`_onInspect`（`protected Action`）、`ExecuteAction()`、`ExecuteRemove()`、`NavigationHandler`、`Data`。**`ExecuteAction()` / `ExecuteRemove()` 都不是本类声明的**，却是对外可调的入口——外部代码拿到的类型是本类，调用的却是基类方法。

## 真实示例

mod 要在自己的地图通知里复用这套「Inquiry → 跳转到另一个界面」的手感，就照着它的形状写：构造器里装 `_onInspect`，`InformationManager.ShowInquiry` 的 affirmative 动作调 `NavigationHandler` 上的方法。

```csharp
using System;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes;
using TaleWorlds.Core;
using TaleWorlds.Library;
using TaleWorlds.Localization;

// 我的通知数据：照抄官方单参构造的形状（InformationData 的 description 形参）
public class MyAlleyWarningMapNotification : InformationData
{
    public Alley Alley { get; private set; }

    public MyAlleyWarningMapNotification(Alley alley, TextObject description)
        : base(description)
    {
        this.Alley = alley;
    }

    public override TextObject TitleText
    {
        get { return new TextObject("{=aBcDeF12}暗巷需要人手", null); }
    }

    public override string SoundEventPath
    {
        get { return string.Empty; }
    }
}

// 我的通知 VM：_onInspect 装一个 Inquiry，affirmative 去调 NavigationHandler
public class MyAlleyWarningItemVM : MapNotificationItemBaseVM
{
    private readonly Alley _alley;

    public MyAlleyWarningItemVM(MyAlleyWarningMapNotification data)
        : base(data)
    {
        this._alley = data.Alley;
        this.NotificationIdentifier = "my_alley_warning";
        this._onInspect = delegate
        {
            InformationManager.ShowInquiry(
                new InquiryData(
                    this.TitleText,
                    this.DescriptionText,
                    true, true,
                    "去氏族页面",
                    "忽略",
                    this.OnGoToClan,
                    new Action(this.ExecuteRemove),
                    "", 0f, null, null, null),
                false, false);
        };
    }

    private void OnGoToClan()
    {
        // NavigationHandler 是 public 属性，由 MapNotificationVM 在构造之后挂上来。
        // 判空顺序和官方一致：先判 handler，再判数据。
        if (this.NavigationHandler == null || this._alley == null)
        {
            return;
        }
        this.NavigationHandler.OpenClan(this._alley);
        this.ExecuteRemove();
    }
}
```

**这个 VM 必须通过 `MapNotificationVM.RegisterMapNotificationType(typeof(MyAlleyWarningMapNotification), typeof(MyAlleyWarningItemVM))` 注册才会被造出来**，否则 `GetNotificationFromData` 查不到类型就静默返回 `null`（见 [MapNotificationVM](../MapNotificationVM)）。

## 风险与边界

- **零 public 成员。** 想调它的任何行为都只能走基类的 `ExecuteAction()` / `ExecuteRemove()` / `SetNavigationHandler()`。反射工具按「本类声明的 public 成员」枚举时会得到空集——这不是缺页，是真的没有。
- **`NavigationHandler` 为 null 时 affirmative 按钮静默无效。** `if` 的两个条件都在里面，连通知都不会消失。造实例后没调 `SetNavigationHandler` 就是这个状态。
- **文案是 1.3.0 的硬编码英文**，带 `{=...}` key 但 1.3.0 源码里就是这些 key；`{DAYS}` 用 `SetTextVariable` 在运行时填。想本地化得自己写 `TextObject` 走语言文件。
- **倒计时取自 `Campaign.Current.Models.AlleyModel`，模型缺失会 NRE。** `(int)...DestroyAlleyAfterDaysWhenLeaderIsDeath.ToDays` 是一条不带判空的链，模型没注册时 `Campaign.Current.Models` 本身就是 null。
- **没有 `OnFinalize` 覆写是对的，但如果你派生它并加了 `CampaignEvents` 监听，就必须自己补一个 `public override void OnFinalize()` 并调 `CampaignEventDispatcher.Instance.RemoveListeners(this)`。**
- **数据构造器有两个重载**：[AlleyLeaderDiedMapNotification](../../campaign/AlleyLeaderDiedMapNotification) 有 `(Alley, TextObject)` 和 `(TextObject)` 两个版本。用后者造出来的数据 `Alley` 是 null，点了「了解更多」会静默无效。
- **`IsValid()` 未被覆写。** 父类 [InformationData](../../core-extra/InformationData) 的默认实现恒返回 true，所以这条通知一旦挂上就不会自己过期——**它只会在玩家点开并选完按钮后消失**。真正的废弃判定在 [IAlleyCampaignBehavior](../../campaign/IAlleyCampaignBehavior) 那侧。
- **`_alley` 字段没有加 `readonly`**（第 42 行 `private Alley _alley;`）。它只在构造器里被赋值一次，但声明上确实不是只读，派生类可以用反射改掉它。

## 跨版本提示

**public 面在五棵源码树里零变化**：只有一个构造器，44→45→46 行的差异全部来自 decompiled 排版（1.3.15 起 `public AlleyLeaderDiedMapNotificationItemVM(AlleyLeaderDiedMapNotification data)` 与 `: base(data)` 被拆成两行）与 Token 注释的 RVA 重编号。1.5.3 也仍是 46 行。

**跨版本风险在两处间接依赖上：**

- `Campaign.Current.Models.AlleyModel.DestroyAlleyAfterDaysWhenLeaderIsDeath` 是 [AlleyModel](../../campaign/AlleyModel) 的抽象属性，1.3.0 返回 `CampaignTime`。若后续版本改了返回类型，这里会编译不过——**抄这段代码时先看目标版本的属性类型**。
- 三条硬编码英文（`An alley without a leader` / 长正文 / `Learn more`）在五棵树里一字未改。1.5.3 也没有本地化 key 化的迹象。

**结论：拿这个类当 `MapNotificationItemBaseVM` 派生模板是安全的，跨 1.3 → 1.5 不会编译不过。**

## 依赖关系

- 基类与生命周期：[MapNotificationItemBaseVM](../MapNotificationItemBaseVM) 定义 `_onInspect` / `ExecuteAction()` / `ExecuteRemove()` / `NavigationHandler` / `Data`；UI 底座是 [ViewModel](../../core-extra/ViewModel)
- 注册与反射构造：[MapNotificationVM](../MapNotificationVM) 的 `PopulateTypeDictionary` / `RegisterMapNotificationType` / `GetNotificationFromData`
- 输入数据：[AlleyLeaderDiedMapNotification](../../campaign/AlleyLeaderDiedMapNotification) 提供 `Alley`，基类为 [InformationData](../../core-extra/InformationData)（`TitleText` / `SoundEventPath` / `IsValid`）
- 跳转目标：[MapNavigationExtensions](../../campaign/MapNavigationExtensions) 是挂在 `INavigationHandler` 上的**扩展方法类**（`this INavigationHandler handler`），本类用的 `OpenClan(this INavigationHandler, Alley)` 是其中第 190 行的一个重载；[INavigationHandler](../../campaign/INavigationHandler) 接口本身只有 `IsNavigationLocked` / `GetElements()` / `GetElement(string)` / `IsAnyElementActive()` 四个成员
- 倒计时来源：[AlleyModel](../../campaign/AlleyModel) 的 `DestroyAlleyAfterDaysWhenLeaderIsDeath`；真正执行废弃的是 [IAlleyCampaignBehavior](../../campaign/IAlleyCampaignBehavior)
- 弹窗：[InformationManager](../../core-extra/InformationManager) 的 `ShowInquiry(InquiryData, bool, bool)`；文案走 [GameTexts](../../core-extra/GameTexts) 的 `str_dismiss`
- 兄弟通知：[AlleyUnderAttackMapNotificationItemVM](../AlleyUnderAttackMapNotificationItemVM)（会自挂 `CampaignEvents`）· [ArmyCreationNotificationItemVM](../ArmyCreationNotificationItemVM)（三个事件）· [ArmyDispersionItemVM](../ArmyDispersionItemVM)
- 桶首页：[viewmodel API 分区](../)
