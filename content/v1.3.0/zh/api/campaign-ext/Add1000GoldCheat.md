---
title: "Add1000GoldCheat"
description: "地图作弊菜单里的一项：ExecuteCheat 只做一件事 GiveGoldAction.ApplyBetweenCharacters(null, Hero.MainHero, 1000, true)。由 GameplayCheatsManager.GetMapCheatList() 硬编码 yield return，不是行为、不进存档、不注册到任何事件。"
---

# Add1000GoldCheat

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class Add1000GoldCheat : GameplayCheatItem`
**Base:** `GameplayCheatItem`
**File:** `SandBox/Add1000GoldCheat.cs`

## 概述

地图作弊菜单里的第一项，「+1000 金币」。全文 23 行，**两个方法，一行字段都没有**：

```csharp
public class Add1000GoldCheat : GameplayCheatItem
{
    public override void ExecuteCheat()
    {
        GiveGoldAction.ApplyBetweenCharacters(null, Hero.MainHero, 1000, true);
    }

    public override TextObject GetName()
    {
        return new TextObject("{=KLbeF6gf}Add 1000 Gold", null);
    }
}
```

它**不是** `CampaignBehaviorBase`、不注册任何事件、不进存档、不可 `AddBehavior`、不可 `SyncData`。它是一个纯命令对象：被菜单 VM 拿到，被点一次，执行一次，扔掉。

## 心智模型

**它在哪条链上。** 从按键到执行的完整链路是七跳，每一跳都在不同的文件里：

```
MapScreen.HandleCheatMenuInput(dt)                       SandBox.View/Map/MapScreen.cs:1777
  └─ 三个 debug 键 248 / 255 / 241 同时按住 > 0.55s
MapScreen.OpenGameplayCheats()                           SandBox.View/Map/MapScreen.cs:2278
  └─ AddMapView<MapCheatsView>(Array.Empty<object>())
GauntletMapCheatsView.CreateLayout()                     SandBox.GauntletUI/Map/GauntletMapCheatsView.cs:20
  └─ GameplayCheatsManager.GetMapCheatList()
GameplayCheatsManager.GetMapCheatList()                  SandBox/GameplayCheatsManager.cs:12-31
  └─ yield return new Add1000GoldCheat();                 ← 本类唯一的注册点，第 14 行
GameplayCheatsVM 构造函数 → FillWithCheats(cheats)        SandBox.ViewModelCollection/Map/Cheat/GameplayCheatsVM.cs:22,70
  └─ 逐个 new CheatActionItemVM(cheat, onCheatExecuted) 或塞进 CheatGroupItemVM
CheatActionItemVM.ExecuteAction()                        SandBox.ViewModelCollection/Map/Cheat/CheatActionItemVM.cs:24
  └─ cheat.ExecuteCheat();
```

**「注册」的本质是一条 `yield return`。** `GameplayCheatsManager` 是个 `static class`，`GetMapCheatList()` 是一个 `IEnumerable<GameplayCheatBase>` 迭代器方法，函数体就是十四行 `yield return` 加一个 `yield break`：

```csharp
// SandBox/GameplayCheatsManager.cs:11-31（逐字）
public static IEnumerable<GameplayCheatBase> GetMapCheatList()
{
    yield return new Add1000GoldCheat();
    yield return new Add100InfluenceCheat();     // ← 注意没有第二个 0
    yield return new Add100RenownCheat();
    yield return new AddCraftingMaterialsCheat();
    yield return new BoostSkillCheatGroup();
    if (Settlement.CurrentSettlement != null && Settlement.CurrentSettlement.IsFortification)
    {
        yield return new CompleteBuildingProjectCheat();
    }
    yield return new FillCraftingStaminaCheat();
    ...
    yield break;
}
```

**每次调用 `GetMapCheatList()` 都 new 一批新实例**，所以作弊项无状态、可以随便重复 new。这是这个设计的核心便利。

**「mod 能不能自己挂」的答案是：能挂进 VM，不能挂进这张表。** 因为 `GetMapCheatList()` 是静态方法 + `yield break` 收尾，**没有任何 hook、没有 partial、没有被替换的可能**。但 `GameplayCheatsVM` 的构造函数是 public 且吃任意 `IEnumerable<GameplayCheatBase>`：

```csharp
public GameplayCheatsVM(Action onClose, IEnumerable<GameplayCheatBase> cheats)
```

所以 mod 可以自己 `new GameplayCheatsVM(close, 官方列表.Concat(new[]{ 我的作弊 }))` 然后自己造一个 Layer 加载 `MapCheats` movie——**完全复刻 `GauntletMapCheatsView.CreateLayout` 的七行**。但这是「另开一个作弊菜单」，不是「往官方菜单里加一项」。

**基类只有一层抽象。** `GameplayCheatItem : GameplayCheatBase`，两个抽象方法：

```csharp
// SandBox/GameplayCheatBase.cs —— 全文
public abstract class GameplayCheatBase { public abstract TextObject GetName(); }

// SandBox/GameplayCheatItem.cs —— 全文
public abstract class GameplayCheatItem : GameplayCheatBase { public abstract void ExecuteCheat(); }
```

`GameplayCheatBase` 只有 `GetName()`（所有分组类也要实现），`GameplayCheatItem` 才加上 `ExecuteCheat()`。所以 `BoostSkillCheatGroup` 这类**分组**挂在 base 上（它没有可执行动作），单项挂在 item 上。`GameplayCheatsVM.FillWithCheats` 靠这个类型差别决定是塞成 `CheatActionItemVM` 还是 `CheatGroupItemVM`。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `ExecuteCheat` | `public override void ExecuteCheat()` | 唯一的行为：`GiveGoldAction.ApplyBetweenCharacters(null, Hero.MainHero, 1000, true);`。四个参数分别是 `giverHero=null`、`recipientHero=主英雄`、`amount=1000`、`disableNotification=true`。调用者是 `CheatActionItemVM.ExecuteAction()`，**每点一次执行一次，没有冷却、没有确认、没有上限**。 |
| `GetName` | `public override TextObject GetName()` | 返回 `new TextObject("{=KLbeF6gf}Add 1000 Gold", null)`。`{=...}` 是本地化键，第二个参数 null 表示无 fallback 字符串。`CheatActionItemVM.RefreshValues()` 调它并 `.ToString()` 塞进 VM 的 `Name`。**每次刷新都 new 一个新 TextObject，不缓存。** |

注意 `1000` 是**硬编码在方法体里的字面量**，既不是常量也不是字段。「加多少」这件事在类型上完全不可配置。

## 真实示例

**用法一：mod 自己加一个作弊项，形状照抄本类。**

```csharp
using SandBox;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.Localization;

public class AddModRenownCheat : GameplayCheatItem
{
    public override void ExecuteCheat()
    {
        GainRenownAction.ApplyBetweenCharacters(Hero.MainHero, Hero.MainHero, 500, true);
    }

    public override TextObject GetName()
    {
        return new TextObject("{=MyModKey01}Add 500 Renown", null);
    }
}
```

**用法二：把它挂进一个自己的作弊菜单。** 这是 mod 能做到的最大程度——造自己的 VM + 自己的 Layer：

```csharp
using System.Collections.Generic;
using System.Linq;
using SandBox;
using SandBox.GauntletUI.Map;
using SandBox.ViewModelCollection.Map.Cheat;
using TaleWorlds.Engine.GauntletUI;
using TaleWorlds.InputSystem;
using TaleWorlds.MountAndBlade.View;
using TaleWorlds.ScreenSystem;

// 逐行对照 SandBox.GauntletUI/Map/GauntletMapCheatsView.cs:20-30
public static class ModCheatPanel
{
    private static GauntletLayer _layer;
    private static GameplayCheatsVM _vm;

    public static void Open(ScreenBase screen, MapView mapView)
    {
        var all = GameplayCheatsManager.GetMapCheatList()
            .Concat(new GameplayCheatBase[] { new AddModRenownCheat() });

        _vm = new GameplayCheatsVM(new System.Action(Close), all);

        _layer = new GauntletLayer(4500, "ModCheatLayer", false);
        _layer.LoadMovie("MapCheats", _vm);
        _layer.Input.RegisterHotKeyCategory(HotKeyManager.GetCategory("GenericPanelGameKeyCategory"));
        _layer.InputRestrictions.SetInputRestrictions(true, 7);
        _layer.IsFocusLayer = true;
        ScreenManager.TrySetFocus(_layer);
        mapView.AddLayer(_layer);
        Campaign.Current.TimeControlMode = 0;
        Campaign.Current.SetTimeControlModeLock(true);
    }

    public static void Close()
    {
        if (_vm != null) { _vm.OnFinalize(); _vm = null; }
        if (_layer != null) { ScreenManager.TryLoseFocus(_layer); _layer = null; }
        Campaign.Current.SetTimeControlModeLock(false);
    }
}
```

**关键点：`LoadMovie("MapCheats", _vm)` 里的 `"MapCheats"` 是现成的 prefab 名**——这是能免费复用官方 UI 的原因。movie 名必须匹配，否则加载失败。

**用法三：完全绕过菜单，直接执行。** 因为 `ExecuteCheat` 无状态、无副作用登记，直接 new 出来调一次是安全的：

```csharp
// mod 的调试菜单 / 控制台命令 / GM 指令里
new Add1000GoldCheat().ExecuteCheat();
```

这和「玩家点菜单」在游戏侧的效果**完全相同**——`GiveGoldAction` 走的是正规金币变动通道，会有存档变更、会触发 AI 反应、会在日志里留下记录。

## 风险与边界

- **`GiveGoldAction.ApplyBetweenCharacters(null, ...)` 的第一个参数是 `null`，不是「无来源」的哨兵。** 看它的实现（`TaleWorlds.CampaignSystem/Actions/GiveGoldAction.cs:46`）：`ApplyInternal(giverHero, null, recipientHero, null, amount, !disableNotification && (giverHero == Hero.MainHero || recipientHero == Hero.MainHero), "")`。`giverHero == null` 时第四个参数 `targetSettlement=null`，金币直接进主英雄口袋。**第五个参数 `showNotification` 在 `disableNotification=true` 时恒为 false**——所以作弊菜单里加金币是**静默的**，玩家看不到任何提示。
- **`amount = 1000` 是硬编码的 int，不能改。** 想加 100 万只能自己写一个 `GameplayCheatItem`。而且 `ExecuteCheat` 里没有任何重复保护，**连点十次就是一万金币**。
- **`GetName()` 每次 new 一个 `TextObject`，`RefreshValues()` 会遍历整个列表重调一遍。** 列表有 13~14 项，每项一个 TextObject——量级微不足道，但如果你自己写一个几百项的作弊列表，这就是每次刷新的几百次分配。缓存成 `static readonly TextObject` 是安全的。
- **作弊菜单的按键组合是三个 debug 键（`Input.IsKeyDown(248)` / `255` / `241`）同按超过 0.55 秒**（`MapScreen.cs:1780`）。这些键号来自 debug 输入层，**不是热键配置里的字符串**——玩家在设置里改不了，也意味着 mod 无法在不碰 `MapScreen` 的前提下改这个组合。
- **官方作弊菜单和故事模式作弊是两套 UI，但共用同一份列表。** `StoryMode.GauntletUI/SandBox/GauntletUI/Missions/MissionGauntletStoryModeCheatView.cs:43` 调的是 `GetMissionCheatList()`（另一个方法，只有 `WoundAllEnemiesCheat` 和 `HealMainHeroCheat` 两项），而地图侧用 `GetMapCheatList()`。**`Add1000GoldCheat` 只出现在地图列表里**。
- **它不是 cheat 系统的扩展点，而是 cheat 系统的叶子。** `GameplayCheatsManager` 没有 `Add()` / `Register()`，只有一个 `yield break`。想加项只能绕开它（见用法二）。这是这个类型最需要记住的一条。
- **用了作弊之后成就会被停掉，但本类自己不负责这件事。** 停成就是 `GauntletStoryModeMapCheatsView.cs:38-40` 做的：`campaignBehavior.CheckAchievementSystemActivity(out reason)` 之后 `DeactivateAchievements(..., true, false)`。而 `CheckAchievementSystemActivity` 里有 `|| MBDebug.IsTestMode()`，**测试模式下成就不会被停**。见 [AchievementsCampaignBehavior](../AchievementsCampaignBehavior) 与 [DumpIntegrityCampaignBehavior](../DumpIntegrityCampaignBehavior)。
- **`SandBox` 是沙盒模块命名空间，不是核心。** 裸战役（无 `SandBox` 模块）里这个类型根本不存在，编译都过不了。

## 跨版本提示

`Add1000GoldCheat.cs` 在 `bannerlord-1.3.0` / `1.4.6` / `1.4.7` / `1.5.3` 四棵树里**逐字节一致**：都是 23 行、同样的两个方法、同样的 `GiveGoldAction.ApplyBetweenCharacters(null, Hero.MainHero, 1000, true)` 调用、同样的 `"{=KLbeF6gf}Add 1000 Gold"` 本地化键。**跨 1.3 → 1.5 三个大版本，公开面与实现体零变化**，本地化键也没有被改掉（改键会破坏玩家已安装的官方语言包）。

注册点 `GameplayCheatsManager.GetMapCheatList()` 里的 `yield return new Add1000GoldCheat();` 位置也稳定——**它始终是列表的第一个 `yield return`**（紧跟方法签名之后）。同级作弊项 `Add100InfluenceCheat` / `Add100RenownCheat` 在这几棵树里同样逐字节一致。1.3.15 与 1.4.5 两棵树不含 `SandBox` 工程（前者只有引擎侧程序集，后者只有裁剪过的 `Bannerlord.Source`），无法作为中间版本对照。

**结论：`GetMapCheatList()` 的第一个元素从 1.3.0 到 1.5.3 没变，你照抄一个 `Concat` 扩展的写法在哪个版本上都能编译。** 但要注意 1.3.15 起 `TaleWorlds.Diamond.AccessProvider.*` 系列工程出现，说明 1.3.15 补齐了平台层——这与本类无关，只是那两棵树不含 `SandBox` 的原因。

## 依赖关系

- 基类：[GameplayCheatItem](../GameplayCheatItem)（只加 `ExecuteCheat`）→ [GameplayCheatBase](../GameplayCheatBase)（只声明 `GetName`），两层都是纯抽象、无字段
- 唯一注册点：[GameplayCheatsManager](../GameplayCheatsManager) 的 `GetMapCheatList()` 第 14 行 `yield return new Add1000GoldCheat();`，每次调用 new 新实例
- 执行入口：[CheatActionItemVM](../CheatActionItemVM) 的 `ExecuteAction()` 调 `cheat.ExecuteCheat()`；[CheatItemBaseVM](../CheatItemBaseVM) 是它的基类，负责 `Name` 属性
- UI 容器：[GameplayCheatsVM](../GameplayCheatsVM) 的构造函数吃任意 `IEnumerable<GameplayCheatBase>`，是 mod 插入自定义项的合法入口
- 视图绑定：[MapCheatsView](../MapCheatsView)（空壳 `MapView` 派生）+ `SandBox.GauntletUI/Map/GauntletMapCheatsView.cs` 上的 `[OverrideView(typeof(MapCheatsView))]`
- 触发时机：[MapScreen](../MapScreen) 的 `HandleCheatMenuInput`（三个 debug 键同按 > 0.55s）→ `OpenGameplayCheats()`
- 真正改钱的一行：[GiveGoldAction](../GiveGoldAction) 的 `ApplyBetweenCharacters(Hero, Hero, int, bool)`，作用于 [Hero.MainHero](../../campaign/Hero)
- 文案类型：[TextObject](../../localization/TextObject)，`{=KLbeF6gf}` 是本地化键
- 桶首页：[campaign-ext API 分区](../)