---
title: "CampaignBehaviorBase"
description: "战役 Behavior 的抽象基类：RegisterEvents 挂事件、SyncData 通过 IDataStore 存读自己的私有状态。"
---
# CampaignBehaviorBase

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class CampaignBehaviorBase : ICampaignBehavior`
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviorBase.cs`

## 概述

`CampaignBehaviorBase` 是战役层 mod 扩展的默认落点。它本身只有 6 个公开成员、不到 40 行代码，但它定义了整个战役 mod 的生命周期契约：游戏在战役开始时枚举所有已注册的 Behavior，先调 `RegisterEvents()` 让你自己挂上事件订阅，再在存档与读档时各调一次 `SyncData(IDataStore)`。这个类不做任何事，它只是把「什么时候该干活」和「你的私有字段怎么活过存档」这两个问题交给子类回答。

它不是一个可以 `new` 出来就自动生效的对象。必须先在模块的 `OnGameStart` 里通过 `CampaignGameStarter.AddBehavior(...)` 注册，战役对象才会遍历到它；直接 `new` 出来的实例没有事件订阅入口，游戏不会调它的 `RegisterEvents`。

## 心智模型

典型顺序是：`MBSubModuleBase.OnGameStart(Game game, IGameStarter gameStarter)` → 强转成 `CampaignGameStarter` → `AddBehavior(new MyBehavior())` → 战役对象建立 → 游戏对每个 Behavior 调 `RegisterEvents()` → 战役 tick 与事件循环开始 → 存/读档时调 `SyncData(dataStore)`。

常见误用有三个。一是把业务逻辑塞进构造函数：Behavior 被构造时 `Campaign.Current` 往往还没建立，`Hero.MainHero`、`Clan.Clans` 这些都还是空的，构造函数里做初始化必然拿到错误数据。二是用 `SyncData` 之外的机制存状态：只有走 `IDataStore.SyncData<T>(key, ref value)` 的字段才会进存档；写成 `private Dictionary<...> _cache = new()` 里的新实例，读档后必然丢失，而老存档读回来也不会有你以为的默认值。三是在 `RegisterEvents` 里做重活：`RegisterEvents` 只应做事件订阅和一次性查表（比如 `CampaignEvents.OnSessionStart` 里查 `MBObjectManager.Instance.GetObjectTypeList<Clan>()`），不要在这里遍历整个对象图。

另一个坑是静态 `GetCampaignBehavior<T>()`：它在 `Campaign.Current` 为 null 时会直接抛 `NullReferenceException`，在模块加载期（战役尚未开始）调用必然出错。

## 关键成员

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `StringId` | `public readonly string StringId` | 构造时确定的行为标识，日志与调试工具用它区分实例。不参与存档，也不参与去重 |
| 构造函数 | `public CampaignBehaviorBase(string stringId)` | 显式指定标识。多个 Behavior 共用同一字符串时不会有任何冲突检查，命名唯一性靠你自己保证 |
| 构造函数 | `public CampaignBehaviorBase()` | 把 `GetType().Name` 赋给 `StringId`。两个同名嵌套 Behavior 会得到相同标识 |
| `RegisterEvents` | `public abstract void RegisterEvents()` | 战役装配完成后被调一次。订阅 `CampaignEvents.*`、`Clan.PlayerClanChanged` 等；返回值无意义，被子类忽略 |
| `SyncData` | `public abstract void SyncData(IDataStore dataStore)` | 存/读档双向回调。`dataStore.IsSaving` 为 true 时把字段写出去，false 时按 key 读回来；返回值 void，成功与否由实现负责 |
| `GetCampaignBehavior<T>` | `public static T GetCampaignBehavior<T>()` | 转发到 `Campaign.Current.GetCampaignBehavior<T>()`。返回第一个匹配类型的已注册实例，找不到时返回 `default(T)` 而不是抛异常 |

## 真实示例

```csharp
public class DisbandAllOnCapture : CampaignBehaviorBase
{
    private bool _playerLostLastKeep;

    public override void RegisterEvents()
    {
        CampaignEvents.OnSettlementLeft += OnSettlementLeft;
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("playerLostLastKeep", ref _playerLostLastKeep);
    }

    private void OnSettlementLeft(MobileParty party, Settlement settlement)
    {
        SiegeEvent siege = settlement.SiegeEvent;
        if (siege == null || siege.BesiegedSettlement != settlement)
        {
            return;
        }

        if (settlement.IsCastle)
        {
            _playerLostLastKeep = true;
            InformationManager.AddSystemNotification(new TextObject("{=Ab1Cd2Ef}You lost a castle").ToString());
        }
    }
}
```

注册侧：

```csharp
public override void OnGameStart(Game game, IGameStarter gameStarter)
{
    CampaignGameStarter campaignStarter = (CampaignGameStarter)gameStarter;
    campaignStarter.AddBehavior(new DisbandAllOnCapture());
}
```

`SyncData` 里那个 `string` key 就是存档里的字段名，跨版本必须保持一致；改名等于让老存档的字段变孤儿。注意 1.4.6 的 `Settlement` 上没有 `SettlementType` 枚举，判断城镇类型要用 `IsTown` / `IsCastle` / `IsVillage` / `IsHideout` 这组布尔属性。`dataStore.IsSaving` 分支不需要写，因为 `SyncData<T>(key, ref value)` 在两个方向上是同一行代码。

## 风险与边界

- **生命周期**：`RegisterEvents()` 只在战役装配完成后调一次，订阅后**不会**因为读档而重复订阅；如果你的 Behavior 实例被 `AddBehavior` 添加两次，就会收到双份回调。
- **静态入口的空引用**：`GetCampaignBehavior<T>()` 依赖 `Campaign.Current`，在 `OnGameStart` 之前的早期阶段调用会抛异常；返回值也可能是 `default(T)`，必须判空。
- **存档兼容**：`SyncData` 的 key 与字段类型是存档契约。改 key、改类型（`int` → `enum`、加可空包装）都会让老档读不出期望值，且游戏不会给出迁移提示。
- **构造期无战役上下文**：构造函数里不要碰 `Campaign.Current`、`Hero.MainHero`、`Clan.Clans`，它们在 `AddBehavior` 时可能仍是空集合。
- **`StringId` 无唯一性校验**：它只用于诊断输出，两个 Behavior 共用 ID 不会报错，但会让日志无法区分来源。

## 跨版本提示

`CampaignBehaviorBase` 在 1.3.0、1.3.15、1.4.5、1.4.6 四个版本的声明完全一致（`public abstract class CampaignBehaviorBase : ICampaignBehavior`），可访问成员数量都是 2 个（工具把字段与构造按另一套规则统计，实际 1.4.6 源码里的公开面是 6 个成员）。`RegisterEvents`、`SyncData`、`StringId` 与两个构造函数跨版本没有增删，是最稳定的扩展点之一。

## 依赖关系

- 注册入口：[CampaignGameStarter](../CampaignGameStarter) — `AddBehavior` 把实例交给战役装配流程。
- 存档接口：[IDataStore](../IDataStore) — `SyncData` 参数的实际类型。
- 行为容器：[Campaign](../Campaign) — `GetCampaignBehavior<T>` 最终读的是它的内部列表。
- 事件源：[CampaignEvents](../CampaignEvents) — `RegisterEvents` 里订阅的主要来源。
- 对象基类：[MBObjectBase](../../campaign-ext/MBObjectBase) — Behavior 不继承它，但 `Hero`、`Settlement` 等被 Behavior 操作的实体都继承它。
- 父级：campaign API 目录导览位于版本根 `../../../`。