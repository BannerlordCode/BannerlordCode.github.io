---
title: "BannerEditorView"
description: "旗帜编辑器视图（637 行）：构造即建场景 + 建两个 AgentVisuals 双缓冲 + 抢焦点；构造函数的两个 CameraAxis 轴键查找未判空会 NRE；OnFinalize 只在非角色创建路径卸载 sprite category。"
---

# BannerEditorView

**Namespace:** SandBox.GauntletUI.BannerEditor
**Module:** SandBox.GauntletUI
**Type:** `public class BannerEditorView`
**Base:** 无（不继承任何类型；是纯 `class`，不是 `View` 派生）
**File:** `SandBox.GauntletUI/BannerEditor/BannerEditorView.cs`

## 概述

玩家编辑自己旗帜的那个 3D 预览界面：左边（背后）是一个真实渲染的角色 + 盾牌 + 横幅实体，右边叠一层 Gauntlet UI。它同时持有**一个 3D 场景**（`Scene` / `SceneLayer` / `Camera`）和**一个 UI 层**（`GauntletLayer` / `BannerEditorVM`），两个 `Layer` 靠 `HandleUserInput` 里的焦点切换逻辑互相让路。

637 行里只有 5 个 public 成员（4 个属性 + 1 个方法都是公开的，实现上公开的其实是 5 个属性中的 4 个 + 4 个方法）：

| 成员 | 签名 |
| --- | --- |
| `GauntletLayer` | `public GauntletLayer GauntletLayer { get; private set; }` |
| `DataSource` | `public BannerEditorVM DataSource { get; private set; }` |
| `Banner` | `public Banner Banner { get; private set; }` |
| `SceneLayer` | `public SceneLayer SceneLayer { get; private set; }` |
| `OnTick` | `public void OnTick(float dt)` |
| `OnFinalize` | `public void OnFinalize()` |
| `Exit` | `public void Exit(bool isCancel)` |
| `OnDeactivate` | `public void OnDeactivate()` |
| `GoToIndex` | `public void GoToIndex(int index)` |

**它不继承 `View`、不继承 `ScreenBase`、不继承任何东西。** 宿主是 `GauntletBannerEditorScreen` 与 `CharacterCreationBannerEditorView`，两者各自 `new BannerEditorView(...)` 并在构造后手工调 `OnTick` / `OnFinalize` / `OnDeactivate`。

## 心智模型

**核心是「双缓冲 + 延迟一帧」的三段刷新。** 构造函数末尾建了两个 `AgentVisuals`（`_agentVisuals = new AgentVisuals[2]`），两个都 `SetVisible(false)`，然后把 `_checkWhetherAgentVisualIsReady = true`。刷新时**永远切到另一个槽位**：

```csharp
// RefreshShieldAndCharacterAux() :392-400（逐字节选）
private void RefreshShieldAndCharacterAux()
{
    BannerVisualExtensions.GetTableauTextureLarge(this.Banner, delegate(Texture newTexture)
    {
        this.OnNewBannerReadyForShield(newTexture);
    });
    int agentVisualToShowIndex = this._agentVisualToShowIndex;
    this._agentVisualToShowIndex = (this._agentVisualToShowIndex + 1) % 2;   // ← 双缓冲翻转到另一槽
    AgentVisualsData data = this._agentVisuals[this._agentVisualToShowIndex].GetCopyAgentVisualsData();
    ...
}
```

`_agentVisualToShowIndex` 每刷新一次 `(index + 1) % 2` 翻转，`OnTick` 里靠 `CheckResources(...)` 返回 true 才把新槽位 `SetVisible(true)`。**这个「等资源加载完再显示」的两帧延迟是整个类的节奏来源**——`UpdateBanners` / `RefreshShieldAndCharacterAux` 都只是把 `_refreshBannersNextFrame` / `_refreshCharacterAndShieldNextFrame` 置 true，真正的活在下一帧 `OnTick` 里。

**构造函数干了六件重活**（`:69-124`），顺序固定：

1. `UIResourceManager.LoadSpriteCategory("ui_bannericons")` —— 加载旗标图标精灵分类
2. 按「有没有传 stage 相关委托」二选一，建 `BannerEditorVM`，并**用不同的描述文案**（角色创建版 `"Customize your banner's sigil"`，独立编辑器版 `"Customize your personal banner by choosing your clan's sigil"`）→ 同时设 `_isOpenedFromCharacterCreation`
3. `new GauntletLayer(1, "GauntletLayer", false)` + 注册两个热键类别 + `IsFocusLayer = true` + `ScreenManager.TrySetFocus`
4. 按 `Id == "CameraAxisX"` / `"CameraAxisY"` 从 `FaceGenHotkeyCategory` 里取轴键并 `AddCameraControlInputKey`（**带本地化显示名**）
5. `CreateScene()` —— 建 3D 场景、`Scene.Read("banner_editor_scene", ...)`、找 `spawnpoint_player` 实体定相机初始位、建 `Camera`、`new SceneLayer("SceneLayer", true, true)` 并注册同样两个热键类别、`AddCharacterEntity(...)`
6. 建两个 `AgentVisuals` 槽位、灌装备与横幅、`CheckResources(true, true)`

**焦点切换是 `HandleUserInput` 的第一段**（`:423-439`）：鼠标点在 3D 场景上就把焦点从 `GauntletLayer` 让给 `SceneLayer`，点在 UI 上就换回来。两个 layer 都 `IsFocusLayer = true` 但只有一个真持有焦点，靠 `ScreenManager.FocusedLayer` 判断。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `GauntletLayer` | `public GauntletLayer GauntletLayer { get; private set; }` | UI 层。构造时 `new GauntletLayer(1, ...)`（order 1，最低优先级），`OnTick` 里在 `SceneLayer.ReadyToRender()` 之后才 `LoadMovie("BannerEditor", this.DataSource)`——**等 3D 场景就绪才建 UI**，加载窗口在此期间由 `LoadingWindow.DisableGlobalLoadingWindow()` 关掉。`Exit` 里被置 null。 |
| `DataSource` | `public BannerEditorVM DataSource { get; private set; }` | UI 数据源。构造时按分支用不同的 currentStageIndex/totalStagesCount/furthestIndex（创建路径全传 0，独立编辑器路径传三个委托的调用结果）。`OnFinalize` 里对非 null 才调 `dataSource.OnFinalize()`。 |
| `Banner` | `public Banner Banner { get; private set; }` | 被编辑的横幅对象，构造时传入，**之后再没被赋过新值**（`private set` 但只在 ctor 里写）。所有纹理刷新与材质更新都围着它转。注意构造函数里 `this.Banner = banner;` 之后紧接着又有 `this._currentBanner = this.Banner;` —— `_currentBanner` 才是回调里用于「纹理是不是过期」的判据。 |
| `SceneLayer` | `public SceneLayer SceneLayer { get; private set; }` | 3D 层。`CreateScene()` 里 `new SceneLayer("SceneLayer", true, true)` 并注册两个热键类别、`SetScene(this._scene)`、`SetSceneUsesShadows(true)`、`SceneView.SetResolutionScaling(true)`、`SetPostfxConfigParams(num)`。`OnDeactivate` 里不会把它置 null（只把 `_scene` 置 null）。 |
| `OnTick` | `public void OnTick(float dt)` | 每帧入口，顺序：`HandleUserInput(dt)` → `_isFinalized` 早退 → `UpdateCamera(dt)` → 场景就绪则建 movie → `_scene.Tick(dt)` → 消费两个 next-frame 标志 → 推进双缓冲可见性。**两处 `_isFinalized` 早退**：任何一次 tick 里触发退出，后续逻辑全部跳过。 |
| `OnFinalize` | `public void OnFinalize()` | 只做三件事：`if (!_isOpenedFromCharacterCreation) this._spriteCategory.Unload();`、`DataSource.OnFinalize()`（判空）、`this._isFinalized = true`。**不释放 `_scene`、不销毁 `AgentVisuals`、不卸载 `GauntletLayer`、不 `ScreenManager.TryLoseFocus`。** |
| `Exit` | `public void Exit(bool isCancel)` | UI 侧的退出。`MouseManager.ActivateMouseCursor(1)` + `this._gauntletmovie = null`，然后 `isCancel` 为 true 就 `Invoke` 负向委托并 return；否则先 `SetMapIconAsDirtyForAllPlayerClanParties()` 再 `Invoke` 正向委托。**不设 `_isFinalized`，不释放资源。** |
| `OnDeactivate` | `public void OnDeactivate()` | 3D 侧的资源回收：两个 `AgentVisuals[].Reset()` → `MBAgentRendererSceneController.DestructAgentRendererSceneController(_scene, _agentRendererSceneController, false)` → `_agentRendererSceneController = null` → `_scene.ClearAll()` → `_scene = null`。**这是唯一真正释放 3D 资源的方法，且它不碰 `_isFinalized`。** |
| `GoToIndex` | `public void GoToIndex(int index)` | 单行 `this._goToIndexAction.Invoke(index);` —— 直接转发给构造时传入的委托，**不判空**。 |

## 真实示例

**用法一：打开一个独立的旗帜编辑器（照抄官方唯一调用点）。**

```csharp
// SandBox.GauntletUI/BannerEditor/GauntletBannerEditorScreen.cs:23（逐字节照抄）
_bannerEditorLayer = new BannerEditorView(
    bannerEditorState.GetCharacter(),
    bannerEditorState.GetClan().Banner,
    new ControlCharacterCreationStage(this.OnDone),
    new TextObject("{=WiNRdfsm}Done", null),
    new ControlCharacterCreationStage(this.OnCancel),
    new TextObject("{=3CpNUnVl}Cancel", null),
    onRefresh: null,
    getCurrentStageIndexAction: null,
    getTotalStageCountAction: null,
    getFurthestIndexAction: null,
    goToIndexAction: null);
```

**最后五个参数全传 `null` 就是「独立编辑器」模式**（`_isOpenedFromCharacterCreation == true` 那条分支被 `getCurrentStageIndexAction == null || getTotalStageCountAction == null || getFurthestIndexAction == null` 命中）。这条路径下 `GoToIndex` **必然 NRE**，因为 `_goToIndexAction` 是 null——见风险段。

角色创建里嵌编辑器的调用（`SandBox.GauntletUI/CharacterCreation/CharacterCreationBannerEditorView.cs:28`）则传齐四个委托：

```csharp
_bannerEditorView = new BannerEditorView(character, banner,
    new ControlCharacterCreationStage(this.AffirmativeAction), affirmativeActionText,
    negativeAction, negativeActionText,
    onRefresh,
    getCurrentStageIndexAction,      // 这四个非 null → _isOpenedFromCharacterCreation == false
    getTotalStageCountAction,
    getFurthestIndexAction,
    goToIndexAction);
```

**用法二：宿主必须自己驱动生命周期。** 因为它不继承任何基类，没有框架替它调：

```csharp
// 每帧
_bannerEditorView.OnTick(deltaTime);
// 关界面
_bannerEditorView.OnFinalize();     // 释放 sprite category + DataSource
_bannerEditorView.OnDeactivate();   // 释放 3D 场景（这一步不会自动发生）
```

**注意 `OnFinalize` 与 `OnDeactivate` 管的是完全不相干的两套资源，官方两个宿主都得手动各调一次。** 顺序上 `Exit` 走完之后宿主才应该调这两个——`Exit` 里的委托（`OnDone` / `OnCancel`）会把 UI 拆掉，但 3D 场景还在。

## 风险与边界

- **构造函数里两处 `FirstOrDefault(...).Id` 未判空，会 NRE。** `:99-102`：`GameAxisKey gameAxisKey = ...RegisteredGameAxisKeys.FirstOrDefault((GameAxisKey x) => x.Id == "CameraAxisX");` 紧跟着 `gameAxisKey.Id`（还要拼进本地化键名）和 `AddCameraControlInputKey(gameAxisKey, ...)`。**如果 `FaceGenHotkeyCategory` 没注册这两个轴键（mod 改了热键配置、或者自定义输入上下文），构造函数就崩**——而且崩在构造阶段，宿主连 try/catch 都来不及包。这是整个类里最容易踩的一处。
- **`GoToIndex` 无判空，而独立编辑器路径下它一定是 null。** `:548-551`：`this._goToIndexAction.Invoke(index);`。构造函数的独立编辑器分支把 `_goToIndexAction` 设成 null，`_goToIndexAction` 字段被赋的是构造参数（不是 `BannerEditorVM` 内部那个）。`BannerEditorVM.ExecuteGoToIndex(index)`（`TaleWorlds.CampaignSystem.ViewModelCollection/.../BannerEditorVM.cs:409-412`）是无判空的 `this._goToIndex(index);`。**结果：独立编辑器里任何触发 `ExecuteGoToIndex` 的 UI 路径都会 `NullReferenceException`。** 官方靠「独立编辑器不显示阶段导航 UI」来规避，不是靠判空。
- **`OnFinalize` 的 sprite category 卸载是条件式的，而加载是无条件的。** 构造函数**总是** `UIResourceManager.LoadSpriteCategory("ui_bannericons")`，但 `OnFinalize` 只在 `!_isOpenedFromCharacterCreation` 时 `Unload()`。**角色创建路径下这个分类加载了但不在这释放**（推测由角色创建屏自己管引用计数）。**如果你照抄这个类并改了分支条件，泄漏方向会反过来。**
- **`OnFinalize` 几乎不释放东西。** 它不做 `_scene` 释放、不 `Reset` `AgentVisuals`、不销毁 `GauntletLayer`、不还焦点。**真正释放 3D 资源的是 `OnDeactivate`，而 `OnFinalize` 不会调它。** 漏调 `OnDeactivate` 的后果是 3D 场景与 agent 渲染控制器泄漏。
- **`Exit(isCancel)` 的取消分支早退，跳过了 `SetMapIconAsDirtyForAllPlayerClanParties()`。** `:197-209`：`if (isCancel) { this._negativeAction.Invoke(); return; } this.SetMapIconAsDirtyForAllPlayerClanParties(); this._affirmativeAction.Invoke();`。**正确定义是「取消 = 不改任何已缓存的东西」，这一点是对的**——但要注意它意味着**取消路径下横幅的改动仍然留在这个 `Banner` 对象上**（`Banner` 是引用，宿主传进来的），是否回滚取决于宿主，不取决于本类。
- **`Exit` 也会被 `OnTick` 之外的路径触发，且不设 `_isFinalized`。** 它只把 `_gauntletmovie` 置 null。**若在 `Exit` 之后宿主没有立刻停止调 `OnTick`，那一帧的 `OnTick` 里 `SceneLayer.ReadyToRender()` 还可能重新 `LoadMovie("BannerEditor", ...)`** —— 条件是 `_gauntletmovie == null`，而 `Exit` 刚把它置成了 null。
- **相机数学里的 π 是手写字面量。** `UpdateCamera`（`:519-536`）：`RotateAboutSide(-1.5707964f)`（π/2）、`RotateAboutUp(3.1415927f)`（π）、`RotateAboutForward(-0.18849556f)`（-0.06π），以及 `num6 * 0.017453292f`（π/180，一度）。**这四个都是截断过的十进制字面量，不是 `MathF.PI`。** 换成 `MathF.PI` 不会得到逐位相同的结果。**复刻相机行为必须照抄这些字面量，不能替换成常量。**
- **`OnNewBannerReadyForBanners` 有一个不判空的解引用。** `:358-384`：找不到 `"banner"` tag 时走 `else` 分支 `_ = this._scene.FindEntityWithTag("banner_2")` **直接调 `.GetFirstMesh()`，不判 null**。而 `"banner"` 分支是判了 `if (gameEntity != null)` 的。**场景里两个 tag 都没有时，在 `banner_2` 这条路上崩，在 `banner` 这条路上不崩。**
- **`UpdateBanners` 的纹理销毁顺序有一处不对称。** `:339-356`：`GetTableauTextureLarge(this.Banner, cb, ref previousBannerCreationData)` 之后再 `ForceDestroyTexture(this._previousBannerCreationData)`——**先请求新的、再销毁旧的**。这是正确的顺序（避免回调里用到已销毁的），但**第一次调用时 `_previousBannerCreationData` 是 null，被 `if (this._previousBannerCreationData != null)` 挡住**，所以第一次不会误销毁。
- **`OnTick` 里两个 next-frame 标志的处理在 `_scene.Tick` 之后。** 也就是说**你在 `RefreshShieldAndCharacter()` 里置的标志，最早也要等下一帧才被消费**，而那一帧的场景已经 tick 过一次了。视觉上表现为「改一次旗帜，角色晚一帧才更新」。这是设计取舍（避免同一帧内重建实体），不是 bug。
- **`_agentVisuals` 数组长度硬编码为 2，`_agentVisuals[num]` 的下标是 `(index + 1) % 2`。** 双缓冲写死成两个槽位，**不能靠继承扩展成三个**——`% 2` 与 `new AgentVisuals[2]` 是同一个常数在两个地方。
- **`SandBox.GauntletUI` 是模块工程。** 裸战役（无 `SandBox` 模块）里这个类不存在。

## 怎么用

### 怎么拿到它

声明在 `SandBox.GauntletUI/BannerEditor/BannerEditorView.cs:26`。它**不由角色创建系统直接 new**，而是被两种调用方之一构造：

| 调用方 | 行号 | 传参个数 |
| --- | --- | --- |
| 旗帜编辑独立界面 | `SandBox.GauntletUI/BannerEditor/GauntletBannerEditorScreen.cs:23` | 11 个（含 `character` 与 `banner`） |
| 角色创建里嵌编辑器 | `SandBox.GauntletUI/CharacterCreation/CharacterCreationBannerEditorView.cs:28` | 11 个，**全部为委托** |

构造函数在 `:69`，签名里除了 `BasicCharacterObject character` 和 `Banner banner` 之外，**其余九个全是委托**（`ControlCharacterCreationStage` / `ControlCharacterCreationStageReturnInt` / `ControlCharacterCreationStageWithInt`）。后面七个有默认值，**前两个委托没有**——即「确定」「取消」两路必须提供。

构造函数会建立两个图层：`GauntletLayer`（`:31`）和 `SceneLayer`（`:66`）。

### 典型用法

只读数据、驱动外部刷新，最小写法：

```csharp
using SandBox.GauntletUI.BannerEditor;

public static void RefreshBanner(BannerEditorView view)
{
    if (view == null)
    {
        return;
    }

    // Banner 与 DataSource 都是 public get / private set（:41 与 :36），
    // 在构造函数里确定之后不再变化。
    view.GoToIndex(0);

    // 每帧推进动画状态；不调用它，编辑器不会动。
    view.OnTick(0.016f);
}
```

带完整委托的构造（照抄官方形状）：

```csharp
using SandBox.GauntletUI.BannerEditor;
using TaleWorlds.Core;
using TaleWorlds.Localization;

public static BannerEditorView CreateEditor(
    BasicCharacterObject character,
    Banner banner,
    ControlCharacterCreationStage onAffirmative,
    ControlCharacterCreationStage onNegative)
{
    // 前两个 TextObject 是按钮文字，null 会让按钮没有标题。
    return new BannerEditorView(
        character,
        banner,
        onAffirmative,
        new TextObject("{=MyMod_Done}Done", null),
        onNegative,
        new TextObject("{=MyMod_Cancel}Cancel", null));

    // 后五个委托省略，走默认值。
}
```

### 最容易踩的坑

**把后五个委托当成必须传的。** 它们带默认值，但**前两个委托没有默认值**（`:69`），少传编译不过；反过来多传一个不存在的参数位置，编译也过不了。后果不在编译期，而在运行期：如果你把“取消”那一路接成了空委托（`null`），退出时 `Exit(bool isCancel)`（`:197`）会去调用它，**编辑器关不掉、界面卡在这一步**——因为传 null 只是让回调消失，不会报错。

第二个坑是忘记 `OnTick`。`OnTick(float dt)`（`:126`）是每帧回调，它推进的是 3D 场景里的旗帜预览。后果：编辑器打开了、鼠标能点、但**预览永远停在初始姿势**，看起来像卡死。

第三个坑是生命周期。`OnFinalize`（`:182`）和 `OnDeactivate`（`:537`）负责收尾图层。**提前丢掉引用而不调它们，两个图层不会被释放**——后果是反复开关编辑器后累积出多个未释放的 `GauntletLayer` / `SceneLayer`。

## 跨版本提示

`BannerEditorView.cs` 在 `bannerlord-1.3.0` / `1.4.6` / `1.4.7` / `1.5.3` 四棵树里**公开面一字未改**：逐行比对 public/protected 声明，1.3.0 与 1.5.3 的差集**为空**。九个公开成员（4 个属性 + 5 个方法）签名完全一致，构造函数那 12 个参数的名字与顺序也没变。

变化落在 private 上，而且是有意义的一处重构：

- **`_previousBannerCreationData`（类型 `BannerThumbnailCreationData`）被删除**，替换为**两个**字段 `_latestBannerTextureCreationData` 与 `_latestShieldTextureCreationData`，类型改成 `BannerEditorTextureCreationData`。也就是说**1.3.0 只有一份「上一张缩略图」缓存，1.5.3 把横幅纹理与盾牌纹理的缓存拆成了两份独立追踪**。
- 两个回调的 `Texture` 参数在 1.5.3 里被显式全限定为 `TaleWorlds.Engine.Texture`（`OnNewBannerReadyForBanners(Banner, TaleWorlds.Engine.Texture)` / `OnNewBannerReadyForShield(TaleWorlds.Engine.Texture)`）——**纯粹是命名空间冲突消歧，不影响调用**。
- 文件字节数 24020B → 25346B，增长全部来自这一处纹理缓存重构。

`GauntletBannerEditorScreen.cs:23` 与 `CharacterCreationBannerEditorView.cs:28` 这两个构造调用点在这几棵树里同样未变（`new BannerEditorView(...)` 的实参列表逐字一致），所以**你的宿主代码从 1.3.0 抄到 1.5.3 编译通过**。

1.3.15 与 1.4.5 两棵树不含 `SandBox.GauntletUI` 工程，无法作为中间版本对照。**结论：公开 API 零变化，1.5.3 上所有风险点（构造期 NRE、`GoToIndex` NRE、`Exit` 的取消早退、π 字面量、`banner_2` 不判空）全部原样保留。**

## 依赖关系

- 宿主：`SandBox.GauntletUI/BannerEditor/GauntletBannerEditorScreen.cs:23`（独立编辑器，最后五个参数全 null）与 `SandBox.GauntletUI/CharacterCreation/CharacterCreationBannerEditorView.cs:28`（嵌在角色创建里，四个委托非 null）
- UI 数据源：[BannerEditorVM](../../viewmodel/BannerEditorVM)，`ExecuteGoToIndex(int)` 是 `GoToIndex` 的上游调用方
- 两个 Layer：[GauntletLayer](../../engine/GauntletLayer)（UI，order 1）与 [SceneLayer](../../engine/SceneLayer)（3D），靠 `ScreenManager.FocusedLayer` 互相让焦点
- 3D 资源：`Scene` / `Camera` / `GameEntity` / `Mesh`（来自 `TaleWorlds.Engine`），角色用 [AgentVisuals](../../mission-ext/AgentVisuals) 双缓冲，姿态常量 `ActionIndexCache.act_walk_idle_1h_with_shield_left_stance`
- 相机数学：`MatrixFrame`（[MatrixFrame](../../core-extra/MatrixFrame)）、`MathF.AngleLerp` / `MathF.Lerp`、`MBMath.ClampFloat` / `WrapAngle`；`SoundManager.SetListenerFrame(characterFrame)` 随相机帧走
- 场景内实体 tag：`"spawnpoint_player"`（角色初始位）、`"banner"` / `"banner_2"`（横幅挂点），场景文件 `"banner_editor_scene"`
- 输入：[AxisType](../AxisType) 与 [GameAxisKey](../GameAxisKey) 决定构造函数里取哪两根摇杆轴；类别 `FaceGenHotkeyCategory` / `GenericPanelGameKeyCategory` 来自 [HotKeyManager](../HotKeyManager)
- 装备与武器：[Equipment](../../core-extra/Equipment) / [MissionWeapon](../../mission-ext/MissionWeapon) / [ItemRosterElement](../../core-extra/ItemRosterElement)，`ShieldSlotIndex` 从 `DataSource` 取
- 被编辑对象：[Banner](../../core-extra/Banner)，纹理走 `BannerVisualExtensions.GetTableauTextureLarge` 异步回调
- 退出后的脏标记：`SetMapIconAsDirtyForAllPlayerClanParties()`（`:211-`）遍历 `Clan.PlayerClan.AliveLords` 与 `Clan.PlayerClan.Companions` 各自的 `OwnedCaravans`，对每个 `CaravanPartyComponent` 调 `party.SetVisualAsDirty()`（判 null）与 `caravanPartyComponent.MobileParty.SetNavalVisualAsDirty()`。**只在 `Exit(false)` 的确认路径上执行，取消路径不执行。**
- 桶首页：[campaign-ext API 分区](../)