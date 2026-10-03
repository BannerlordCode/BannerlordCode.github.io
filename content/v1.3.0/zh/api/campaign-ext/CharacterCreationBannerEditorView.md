---
title: "CharacterCreationBannerEditorView"
description: "角色创建里的「编辑旗子」那一格：整个 view 只是 BannerEditorView 的一层壳 + 一个两层的确认回调。第一个构造函数的 characterCreationManager 参数完全没用。VirtualStageCount 恒 1，GoToIndex 转发的是外层索引。"
---

# CharacterCreationBannerEditorView

**Namespace:** SandBox.GauntletUI.CharacterCreation
**Module:** SandBox.GauntletUI
**Type:** `[CharacterCreationStageView(typeof(CharacterCreationBannerEditorStage))] public class CharacterCreationBannerEditorView : CharacterCreationStageViewBase`
**Base:** `CharacterCreationStageViewBase`（→ `../CharacterCreationStageViewBase`）
**File:** `SandBox.GauntletUI/CharacterCreation/CharacterCreationBannerEditorView.cs`（142 行）

## 概述

角色创建流程里的「设计你的家族旗」那一格。它**没有任何自己的功能**——所有活儿都在 [BannerEditorView](../BannerEditorView) 里。这个类做的是三件事：

1. 构造一个 `BannerEditorView` 并持有它（`private readonly BannerEditorView _bannerEditorView;`，`:129`）
2. 把 `CharacterCreationStageViewBase` 的 8 个抽象/虚方法**全部转发**给那个 `_bannerEditorView`
3. 在确认路径上插入一段「把编辑结果写回家族」的逻辑（`private void AffirmativeAction()`，`:106`）

两个构造函数里，**第一个的那个 `characterCreationManager` 参数是死的**：

```csharp
// :19
public CharacterCreationBannerEditorView(CharacterCreationManager characterCreationManager, ...)
    : this(CharacterObject.PlayerCharacter, Clan.PlayerClan.Banner, ...)
{ }
```

参数在整个方法体里没被读过一次。传什么进去都一样。

## 心智模型

**把它当成「`BannerEditorView` 的适配器 + 一个回调陷阱链」。**

最需要理解的是那个**两层的确认回调**：

```
玩家点「完成」
   ▼
BannerEditorView.Exit(false)                      BannerEditorView.cs:197
   │  SetMapIconAsDirtyForAllPlayerClanParties()
   │  this._affirmativeAction.Invoke()            ← BannerEditorView 里存的是
   ▼                                              「new ControlCharacterCreationStage(this.AffirmativeAction)」
                                                （本类构造时传给 BannerEditorView 的第一个 affirmativeAction）
本类 private AffirmativeAction()                 :106
   │  Clan.PlayerClan.Color / Color2 / UpdateBannerColor(...)
   │  (GameStateManager.Current.ActiveState as CharacterCreationState)
   │        .CharacterCreationManager.CharacterCreationContent.SetMainClanBanner(this._bannerEditorView.Banner)
   │  this._affirmativeAction.Invoke()            ← 这一句才是外层传进来的那个
   ▼
CharacterCreationManager 推进到下一格
```

也就是说**同一个「确认」动作被串了两次**：内层 BannerEditorView 的确认 + 本类插入的「写回家族」+ 基类存的那个外层确认。`PreviousStage()` → `_bannerEditorView.Exit(true)` 走的是纯 `_negativeAction` 路径，**不触发任何旗子写回**。

「写回」具体做了四件事，缺一不可：

```csharp
// :106-119
uint primaryColor = this._bannerEditorView.Banner.GetPrimaryColor();
uint firstIconColor = this._bannerEditorView.Banner.GetFirstIconColor();
Clan playerClan = Clan.PlayerClan;
playerClan.Color = primaryColor;
playerClan.Color2 = firstIconColor;
playerClan.UpdateBannerColor(primaryColor, firstIconColor);
(GameStateManager.Current.ActiveState as CharacterCreationState).CharacterCreationManager.CharacterCreationContent.SetMainClanBanner(this._bannerEditorView.Banner);
this._affirmativeAction.Invoke();
```

## 关键成员

| 成员 | 签名（行号） | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造函数（CharacterCreationManager 版） | `:19` | **转发给下一个构造函数，`characterCreationManager` 参数被丢弃。** 固定用 `CharacterObject.PlayerCharacter` 和 `Clan.PlayerClan.Banner`。 |
| 构造函数（BasicCharacterObject + Banner 版） | `:27` | 真正干活的那个。**它在 `base(...)` 里把参数顺序重排了一下**——基类签名是 `(affirmativeAction, negativeAction, refreshAction, getTotalStageCountAction, getCurrentStageIndexAction, …)`，本类调用时写的是 `base(affirmativeAction, negativeAction, onRefresh, getTotalStageCountAction, getCurrentStageIndexAction, getFurthestIndexAction, goToIndexAction)`——**注意后两个顺序跟基类声明反了**（基类声明是 `getCurrentStageIndexAction, getTotalStageCountAction`，这里传的是 `getTotalStageCountAction, getCurrentStageIndexAction`）。因为两者都是 `ControlCharacterCreationStageReturnInt`（同名委托类型），**编译器不报错，语义由基类自己解释**。 |
| `GetLayers` | `public override IEnumerable<ScreenLayer>`（`:38`） | 返回一个 `new List<ScreenLayer> { _bannerEditorView.SceneLayer, _bannerEditorView.GauntletLayer }`——**3D 场景层 + UI 层各一个**。每次调用都 new 一个新 List。 |
| `PreviousStage` | `public override void`（`:47`） | `_bannerEditorView.Exit(true)`。只走取消路径。 |
| `NextStage` | `public override void`（`:52`） | `_bannerEditorView.Exit(false)`。触发上面那条两层回调链。 |
| `Tick` | `public override void Tick(float dt)`（`:57`） | **有 `_isFinalized` 守卫**，然后 `if (!this._isFinalized) base.HandleEscapeMenu(this, this._bannerEditorView.SceneLayer);`。**注意 `if (!this._isFinalized)` 在 58 行，`_bannerEditorView.OnTick(dt)` 在 59 行，中间的 `if (this._isFinalized) return;` 是 60-63 行** —— 也就是说 `OnTick` 跑完之后如果本类在这期间被 finalize 了，就**跳过 HandleEscapeMenu**，这是唯一一处「跑完即退出」的早退。 |
| `GetVirtualStageCount` | `public override int`（`:68`） | **硬编码 `return 1;`**。所以在这一格里 `GoToIndex` 的有效下标永远是 0。 |
| `GoToIndex` | `public override void GoToIndex(int index)`（`:73`） | 转发 `_bannerEditorView.GoToIndex(index)`，而后者是 `_goToIndexAction.Invoke(index)`（`BannerEditorView.cs:548-551`）——**转的是外层 CharacterCreationManager 的索引跳转，不是旗子编辑器内部的 tab**。 |
| `OnFinalize` | `protected override void`（`:78`） | `_bannerEditorView.OnDeactivate()` → `_bannerEditorView.OnFinalize()` → `this._isFinalized = true` → `base.OnFinalize()`。**`_isFinalized` 在两次 deactivation 之后才置位**。 |
| `AffirmativeAction` | `private void`（`:106`） | 见上文。**私有，没有别的调用者**——只被构造函数里传给 `BannerEditorView` 的那个 `ControlCharacterCreationStage` 委托引用。 |
| `LoadEscapeMenuMovie` | `public override void`（`:119`） | `_escapeMenuDatasource = new EscapeMenuVM(base.GetEscapeMenuItems(this), null); _escapeMenuMovie = _bannerEditorView.GauntletLayer.LoadMovie("EscapeMenu", _escapeMenuDatasource);` |
| `ReleaseEscapeMenuMovie` | `public override void`（`:127`） | `_bannerEditorView.GauntletLayer.ReleaseMovie(_escapeMenuMovie);` 然后两个字段置 null。**`_escapeMenuMovie` 与 `_escapeMenuDatasource` 都没有 null 检查**——没 load 过就 release 会 NRE。 |
| `_bannerEditorView` | `private readonly BannerEditorView`（`:129`） | 唯一字段，**readonly**。所有转发都走它。 |
| `_isFinalized` | `private bool`（`:131`） | `Tick` 的守卫。**`OnFinalize` 自己不查它**。 |
| `_escapeMenuDatasource` / `_escapeMenuMovie` | `:133` / `:135` | EscapeMenu 电影的生命周期句柄。 |

## 真实示例

**在角色创建流程里手动跳到这一格并确认（写回逻辑会触发）：**

```csharp
using SandBox.GauntletUI.CharacterCreation;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CharacterCreationContent;

private static void ShowBannerEditorForHero(BasicCharacterObject character, Banner banner)
{
    // 用第二个构造函数才能指定非玩家角色/非玩家家族的旗子
    var view = new CharacterCreationBannerEditorView(
        character,
        banner,
        affirmativeAction: () => Debug.Print("confirmed"),
        affirmativeActionText: new TaleWorlds.Localization.TextObject("{=confirm}OK", null),
        negativeAction: () => Debug.Print("cancelled"),
        negativeActionText: new TaleWorlds.Localization.TextObject("{=cancel}Cancel", null));
    // 从这里接 view.GetLayers() 拿两层，自己驱动 Tick / NextStage / PreviousStage
}
```

**只读地看「这一格有哪些 layer」（不 new 整个 view 是不行的，构造函数就会建 3D 场景）：**

```csharp
private static int CountLayersOfBannerEditor(CharacterCreationBannerEditorView view)
{
    int n = 0;
    foreach (var layer in view.GetLayers())
    {
        n++;
    }
    return n;   // 恒为 2：SceneLayer + GauntletLayer
}
```

**复刻「确认时写回家族」的四步（注意顺序不可调换）：**

```csharp
using TaleWorlds.CampaignSystem;

private static void CommitBannerToClan(Banner editedBanner)
{
    uint primary = editedBanner.GetPrimaryColor();
    uint iconColor = editedBanner.GetFirstIconColor();

    Clan playerClan = Clan.PlayerClan;
    playerClan.Color = primary;                       // 1. 先写裸字段
    playerClan.Color2 = iconColor;
    playerClan.UpdateBannerColor(primary, iconColor); // 2. 再发一次带两个参数的更新（会刷视觉）
    // 3. 第四步 SetMainClanBanner 依赖角色创建状态，本类用的是
    //    (GameStateManager.Current.ActiveState as CharacterCreationState) 这个硬 cast
}
```

## 风险与边界

- **`characterCreationManager` 参数被完全丢弃。** `:19` 的构造函数只做转发。想给一个「非当前 manager」的旗子编辑上下文，得用第二个构造函数显式传 `character` 和 `banner`。
- **基类委托参数顺序被交换。** `:29` 传 `getTotalStageCountAction, getCurrentStageIndexAction`，而 `CharacterCreationStageViewBase` 的构造签名（`SandBox.View/CharacterCreation/CharacterCreationStageViewBase.cs:19`）是 `getCurrentStageIndexAction, getTotalStageCountAction`。**两个都是 `ControlCharacterCreationStageReturnInt` 同类型，编译器不报错**——但基类内部把 `_getCurrentStageIndexAction` 和 `_getTotalStageCountAction` 分别赋了不同字段，所以如果你自己派生了 `CharacterCreationStageViewBase` 并依赖这两个委托的语义，会踩坑。（本类不读它们，所以本类自身无 bug。）
- **`GetVirtualStageCount()` 恒返回 1，但 `GoToIndex(int)` 照常转发。** `:68` 硬编码 1，`:73` 却无条件把 index 传给 `_bannerEditorView.GoToIndex(index)` → 外层 `_goToIndexAction.Invoke(index)`。**调用 `GoToIndex(5)` 不会崩，但也不会有任何效果**——因为这一格只有一个 virtual stage，管理器根本不会发 5。
- **`ReleaseEscapeMenuMovie` 没有 null 守卫。** `:127-131` 直接 `_bannerEditorView.GauntletLayer.ReleaseMovie(this._escapeMenuMovie)`。**没调过 `LoadEscapeMenuMovie` 就调它 → `GauntletMovieIdentifier` 是 `default` → native 侧行为未定义**（`GauntletMovieIdentifier` 是 struct，default 值不是 null）。
- **`OnFinalize` 不查 `_isFinalized`，重复调用会崩。** `:78-83` 调 `_bannerEditorView.OnDeactivate()`，而 `OnDeactivate`（`BannerEditorView.cs:537-545`）做的是 `_agentRendererSceneController = null; this._scene.ClearAll(); this._scene = null;`。**第二次进来时 `_scene` 已经是 null → NRE。** `_isFinalized` 只在最后置位，它保护的是 `Tick` 而不是 `OnFinalize` 自己。
- **`AffirmativeAction` 里的 `as` 硬转换可以返回 null。** `:116` 的 `(GameStateManager.Current.ActiveState as CharacterCreationState)` —— 如果当前 active state 不是角色创建（mod 在别的流程里调了 `NextStage()`），`as` 结果是 null，**紧接着的 `.CharacterCreationManager` 就是 NRE**。没有 null 检查。
- **`AffirmativeAction` 直接写 `Clan.PlayerClan.Color` / `Color2` 两个裸字段。** 绕过了 Campaign 的 Action 层。虽然紧接着调了 `UpdateBannerColor(primary, firstIconColor)`，但**裸字段写在前、通知在后**——如果 `UpdateBannerColor` 内部再读一次 `Color`/`Color2` 做校验，两者已经是一致的，所以看不出问题；但任何监听 `Clan` 变更的其他系统在两个调用之间被唤醒时，看到的是「字段已改、事件未发」的中间态。
- **`Exit(bool)` 会把鼠标光标强制打开。** `BannerEditorView.cs:199` 的 `MouseManager.ActivateMouseCursor(1)` 在 `isCancel` 判断之前无条件执行。所以 `PreviousStage()` 之后鼠标一定是可见的——**手柄流程下这是一个可见的副作用**。
- **`Exit(true)` 不调用 `SetMapIconAsDirtyForAllPlayerClanParties()`，但 `Exit(false)` 会。** `BannerEditorView.cs:203-207` 那段是取消分支 `return` 之后的。所以**「取消编辑」不会刷新地图上的队伍图标**——如果编辑过程中确实改了旗子，地图图标会停留在旧版本直到下次刷新。
- **`Tick` 里 `_isFinalized` 检查了两次。** `:58` 的外层 `if (!this._isFinalized)` 与 `:60` 的 `if (this._isFinalized) return;`。第二次检查是为了「`OnTick` 期间发生了 finalize」的罕见情形——但 **`OnTick` 里没有任何 finalize 触发点**，所以那个早退分支实际上不可达。
- **`GetLayers()` 每次 new 一个 List。** `:39-45`。如果管理器在一次会话里多次问 layers，你会拿到多个引用同一对 layer 的不同 List ——**不是新 layer**，所以去重要小心。

## 跨版本提示

- **12 条 public/protected 声明（类 + 两个构造函数 + 8 个 override + `GetLayers` / `Tick` / `GoToIndex` / `LoadEscapeMenuMovie` / `ReleaseEscapeMenuMovie` / `OnFinalize`）在 1.4.6 / 1.4.7 / 1.5.3 上与 1.3.0 逐字相同。** 自动比对里出现的唯一「差异」是两条构造函数签名在更高版本被拆成了多行（`: this(...)` 与 `: base(...)` 各自独占一行），签名本身一字未改。1.3.15 与 1.4.5 是残缺树（无 `SandBox.GauntletUI/CharacterCreation/`）。
- **`GetVirtualStageCount()` 恒 1、`AffirmativeAction` 的四步写回、基类委托顺序交换、`ReleaseEscapeMenuMovie` 无 null 守卫、`OnFinalize` 不查 `_isFinalized` 这五点在所有存在的版本里原样保留。**
- **对 mod 的实际含义：** 1.3.0 → 1.5.3 升级时这个 view 不需要改。**但如果你在它身上挂 Harmony 补丁，补丁目标的方法名（`NextStage` / `PreviousStage` / `GoToIndex` / `OnFinalize` / `Tick`）都是 `override` 来的虚方法，官方哪天给基类加一个需要实现的新 `virtual`/`abstract` 就需要重新适配**——本类的 8 个转发点正是那批易碎点。

## 依赖关系

- 基类链：[CharacterCreationStageViewBase](../CharacterCreationStageViewBase)（`SandBox.View/CharacterCreation/`）—— 3 个 `abstract`（`GetLayers` / `NextStage` / `PreviousStage` / `GetVirtualStageCount` / `LoadEscapeMenuMovie` / `ReleaseEscapeMenuMovie`）加 `virtual` 的 `Tick` / `GoToIndex` / `OnFinalize` / `SetGenericScene` / `OnRefresh`，以及提供 `HandleEscapeMenu` / `GetEscapeMenuItems` 的两个具体方法
- 真正干活的对象：[BannerEditorView](../BannerEditorView)（`SandBox.GauntletUI/BannerEditor/`）—— 3D 场景层 + `GauntletLayer` + `BannerEditorVM` 全在里面
- 流程注册：类级 `[CharacterCreationStageView(typeof(CharacterCreationBannerEditorStage))]`，目标 stage 是 [CharacterCreationBannerEditorStage](../../campaign/CharacterCreationBannerEditorStage)
- 流程上下文：[CharacterCreationManager](../../campaign/CharacterCreationManager) → `CharacterCreationContent.SetMainClanBanner`（`TaleWorlds.CampaignSystem.CharacterCreationContent`）；本仓库 `api/` 下**没有** `CharacterCreationContent` 与 `EscapeMenuVM` 页面，需要时请直接引用程序集类型名
- 数据写入目标：[Clan](../../campaign/Clan) 的 `Color` / `Color2` / `UpdateBannerColor`；[Banner](../../core-extra/Banner) 的 `GetPrimaryColor` / `GetFirstIconColor`
- 状态判定：`GameStateManager.Current.ActiveState as CharacterCreationState`（[CharacterCreationState](../../campaign/CharacterCreationState)）
- VM：data source 是 `BannerEditorVM`（本仓库 `api/viewmodel/BannerEditorVM.md`）
- 桶首页：[campaign-ext API 分区](../)
