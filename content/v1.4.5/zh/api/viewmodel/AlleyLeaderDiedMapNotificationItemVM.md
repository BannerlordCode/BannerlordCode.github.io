---
title: "AlleyLeaderDiedMapNotificationItemVM"
description: "「你的暗巷失去了头领」这条地图通知的条目视图模型。它只做一件事：点开一个说明面板，正面按钮跳到家族界面、负面按钮关闭自己，并且刻意不订阅任何事件——全类 37 行里没有一次 AddNonSerializedListener。"
---
# AlleyLeaderDiedMapNotificationItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public class AlleyLeaderDiedMapNotificationItemVM : MapNotificationItemBaseVM`  
**Base:** `MapNotificationItemBaseVM`  
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes/AlleyLeaderDiedMapNotificationItemVM.cs`

## 概述

暗巷（Alley）是玩家家族在城镇里的驻点。当暗巷的头领死亡或缺员时，暗巷会进入一个倒计时：`Campaign.Current.Models.AlleyModel.DestroyAlleyAfterDaysWhenLeaderIsDeath` 天之后被废弃，留在里面的兵全部损失。本类就是提醒玩家这件事的那一行。

它是本桶里**最简单的一个通知条目**——整个文件 37 行，构造加两个私有方法，**没有继承任何状态机，也没有订阅任何 `CampaignEvents`**。构造函数只做三件事：

```csharp
_alley = data.Alley;
base.NotificationIdentifier = "alley_leader_died";
_onInspect = CreateAlleyLeaderDiedPopUp;
```

点击后走 `CreateAlleyLeaderDiedPopUp()`：拼两段带 `{=hash}` key 的 `TextObject`（标题与正文），把 `DAYS` 变量填成 `(int)Campaign.Current.Models.AlleyModel.DestroyAlleyAfterDaysWhenLeaderIsDeath.ToDays`，然后弹一个双按钮 `InquiryData`：

- **正面按钮** "Learn more" → `OpenClanScreenAfterAlleyLeaderDeath()`：如果 `NavigationHandler` 与 `_alley` 都在，就 `NavigationHandler.OpenClan(_alley)` 跳转到家族界面，然后 `ExecuteRemove()` 把这条通知撤掉。
- **负面按钮** `str_dismiss` → 直接 `base.ExecuteRemove`。

## 心智模型

把它读成**「一次性说明弹窗 + 一个跳转按钮，且完全不管自己的存亡」**：

- **谁 new 它**：`MapNotificationVM`，第 122 行注册 `_itemConstructors.Add(typeof(AlleyLeaderDiedMapNotification), typeof(AlleyLeaderDiedMapNotificationItemVM))`，第 199 行用 `Activator.CreateInstance(_itemConstructors[type], data)` 反射构造。**无法从代码替换**，只能改通知数据。
- **谁持引用**：`MapNotificationVM` 的通知条目列表；销毁时调用 `OnFinalize()`。
- **绑到哪个 View 属性**：只有基类那些（`TitleText`、`DescriptionText`、`NotificationIdentifier`、`IsFocused`、`RemoveInputKey`）。本类不新增任何 `[DataSourceProperty]`。
- **什么时候 Dispose**：列表回收时调 `OnFinalize()`，而本类**没有覆写它**。因为它没有注册任何监听器，所以**不存在泄漏路径**——这是它与本目录里 `AlleyUnderAttackMapNotificationItemVM`、`ArmyCreationNotificationItemVM` 的关键差别。
- **一个真实的原版怪癖：`NavigationHandler` 为 null 时通知永远不会消失。** 看 `OpenClanScreenAfterAlleyLeaderDeath`：

  ```csharp
  if (base.NavigationHandler != null && _alley != null)
  {
      base.NavigationHandler.OpenClan(_alley);
      ExecuteRemove();
  }
  ```

  `ExecuteRemove()` **在 if 里面**。`NavigationHandler` 是由 `MapNotificationItemBaseVM.SetNavigationHandler(...)` 注入的；在无头环境、战役结束、或通知在地图屏幕之外被构造时它可以是 null，于是"Learn more"按钮点了等于没点——不跳转、也不移除。这条通知会一直挂在通知面板上，直到别的原因把它清掉。
- **不订阅事件 = 不自动消失**。与同目录的战争/联盟类通知不同，这一条**不会**因为暗巷被修复、废弃、或者玩家做了别的什么而自动撤下。它只会被玩家主动 dismiss，或者被 `MapNotificationVM` 在场景切换时整体清空。想让它在暗巷补上人之后消失，必须自己写 `CampaignEvents` 监听。
- **文案是硬编码英文 `TextObject`，不是 `GameTexts` 键**。两段文本都以 `new TextObject("{=6QoSHiWC}...")` 内联，只借 `GameTexts.FindText("str_dismiss")` 取那个取消按钮。只有 `{DAYS}` 一个变量被程序填充。想本地化正文必须替换这两个 `TextObject`。
- **常见误用**：把它当"暗巷状态提示器"。它不读任何暗巷状态，`_alley` 只是个用来跳转的句柄，废弃倒计时在它构造完成时就已经被冻结成字符串了。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造函数 | `public AlleyLeaderDiedMapNotificationItemVM(AlleyLeaderDiedMapNotification data)` | 反射调用。存下 `data.Alley`、设 `NotificationIdentifier = "alley_leader_died"`、把 `_onInspect` 指向弹窗方法。**不注册任何事件。** |
| `_onInspect`（基类 `protected Action`） | 构造函数中赋值 | 玩家点击该行时执行 `CreateAlleyLeaderDiedPopUp()`。 |
| `CreateAlleyLeaderDiedPopUp` | `private void CreateAlleyLeaderDiedPopUp()` | 组装标题/正文两个 `TextObject`，用 `AlleyModel.DestroyAlleyAfterDaysWhenLeaderIsDeath.ToDays` 填 `DAYS`，弹双按钮 `InformationManager.ShowInquiry`：正面 → `OpenClanScreenAfterAlleyLeaderDeath`，负面 → `base.ExecuteRemove`。 |
| `OpenClanScreenAfterAlleyLeaderDeath` | `private void OpenClanScreenAfterAlleyLeaderDeath()` | 双条件检查（`NavigationHandler != null` 且 `_alley != null`）后调 `NavigationHandler.OpenClan(_alley)` 并 `ExecuteRemove()`。**条件不满足时连通知都不移除**——这是原版的既有行为。 |
| `_alley` | `private Alley _alley` | 唯一的字段，构造时从 `data.Alley` 取出。注意它**不是 `readonly`**，也没有 null 检查。 |
| `NotificationIdentifier` | 基类属性，本类设为 `"alley_leader_died"` | 决定地图通知用哪套图标与布局资源。这是本类对外暴露的唯一"身份"。 |

## 真实示例

复刻它的判断依据——倒计时天数在面板打开那一刻就该被冻结：

```csharp
using TaleWorlds.CampaignSystem.Settlements;

// 与 CreateAlleyLeaderDiedPopUp 里读的是同一个 model 值
public string BuildAbandonCountdownText(Alley alley)
{
    int days = (int)Campaign.Current.Models.AlleyModel
        .DestroyAlleyAfterDaysWhenLeaderIsDeath.ToDays;

    TextObject body = new TextObject(
        "{=FzbeSkBb}One of your alleys has lost its leader or is lacking troops. " +
        "It will be abandoned after {DAYS} days have passed.");
    body.SetTextVariable("DAYS", days);
    return body.ToString();
}
```

复刻它那个有缺陷的跳转保护——顺便看清 `ExecuteRemove()` 被关在 `if` 里面的后果：

```csharp
public bool TryOpenClanFromNotification(Alley alley)
{
    if (NavigationHandler == null || alley == null)
    {
        // 与原版一致：不跳转。
        // 注意原版在这里也不会 ExecuteRemove()，通知会一直留着。
        return false;
    }

    NavigationHandler.OpenClan(alley);
    ExecuteRemove();
    return true;
}
```

自己写一个带事件订阅的版本，让通知在暗巷修好后自动消失（这正是原版没做的事）：

```csharp
using TaleWorlds.CampaignSystem.Settlements;

public class MyAlleyLeaderDiedNotificationItemVM : AlleyLeaderDiedMapNotificationItemVM
{
    public MyAlleyLeaderDiedNotificationItemVM(AlleyLeaderDiedMapNotification data)
        : base(data)
    {
        // 原版刻意没有这一步；加上之后只要暗巷修好就会自动撤下通知。
        // SettlementEntered 的委托签名是 (MobileParty, Settlement, Hero)。
        CampaignEvents.SettlementEntered.AddNonSerializedListener(this, OnEnteredSettlement);
    }

    private void OnEnteredSettlement(MobileParty party, Settlement settlement, Hero hero)
    {
        ExecuteRemove();
    }

    public override void OnFinalize()
    {
        base.OnFinalize();

        // 继承了事件就必须自己解绑，否则每次进入城镇都会执行一次死闭包。
        CampaignEventDispatcher.Instance.RemoveListeners(this);
    }
}
```

## 风险与边界

- **`ExecuteRemove()` 被关在 null 检查里面**。这是本类型最值得记住的缺陷：`NavigationHandler` 为 null 时点击正面按钮不产生任何效果，通知也不会消失。若你的 mod 场景（无头、战役结束、地图屏幕外）可能出现这种状态，面板上会积累一条点不掉的死通知。
- **`_alley` 没有 null 检查也没有 readonly**。`_onInspect` 闭包里直接 `_alley.Settlement.Position`（兄弟类）/ `NavigationHandler.OpenClan(_alley)`（本类）。数据侧保证 `data.Alley` 非空，但一旦有别的代码路径构造出 `Alley == null` 的通知数据，本类会在点击时 NRE。
- **生命周期干净，但这是因为它什么都不注册**。没有 `OnFinalize` 覆写、没有 `CampaignEvents`、没有 `Game.Current.EventManager`。代价是它**永远不会自动消失**——想加自动消失就得自己继承并补上解绑（见上方示例）。
- **不参与序列化**。没有 `SyncData`、不接触 `IDataStore`。存档里不存在"这条暗巷通知正在显示"的状态；读档后由战役侧重新推送。
- **废弃倒计时是快照**。`DAYS` 在点击那一刻才从 `AlleyModel` 读出并转成字符串。通知挂在面板上的这期间若模组改了这个 model 值，已显示的文本不会更新。
- **`NavigationHandler` 是外部注入的**。基类 `MapNotificationItemBaseVM.SetNavigationHandler(INavigationHandler)` 由 `MapNotificationVM` 调用。本类只是消费方，永远不要在构造期假定它已就绪。
- **正文文案硬编码英文**。只有 `str_dismiss` 走 `GameTexts`。跨语言版本下这条通知的标题与正文不会变。
- **native 边界**：无。纯托管。
- **跨版本**：`AlleyModel.DestroyAlleyAfterDaysWhenLeaderIsDeath` 与 `INavigationHandler.OpenClan(Alley)` 扩展方法都是 v1.4.5 的形状。`OpenClan` 有 6 个重载（无参 / `Hero` / `PartyBase` / `Settlement` / `Workshop` / `Alley`），传错类型会静默选到语义不同的那个。

## 依赖关系

- ↑ 父类：[MapNotificationItemBaseVM](../MapNotificationItemBaseVM) —— 提供 `_onInspect`、`ExecuteRemove()`、`NavigationHandler`、`NotificationIdentifier`
- ↔ 同级：[MapNotificationVM](../MapNotificationVM) —— 类型构造器表的拥有者与唯一构造入口
- ↔ 同级：[AlleyUnderAttackMapNotificationItemVM](../AlleyUnderAttackMapNotificationItemVM) —— 同一暗巷体系的通知，但那个版本**订阅了** `SettlementEntered`，对比阅读能看清生命周期差异
- → 数据源：[AlleyLeaderDiedMapNotification](../../campaign/AlleyLeaderDiedMapNotification)
- → 暗巷与聚落：[Settlement](../../campaign/Settlement)、`TaleWorlds.CampaignSystem.Settlements.Alley`
- → 弹窗：[InformationManager](../../core-extra/InformationManager)
- → 文本查找：[GameTextManager](../../core-extra/GameTextManager)
- → 事件源：[CampaignEvents](../../campaign-ext/CampaignEvents)
