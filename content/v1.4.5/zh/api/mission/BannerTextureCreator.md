---
title: "BannerTextureCreator"
description: "把 Banner（战旗）离屏渲染成纹理的静态工厂：自带一个独立 Scene 与两台 Camera，而 Game.Current 为 null 时它会悄悄多建一份 BannerVisualCreator。"
---

# BannerTextureCreator

**Namespace:** `TaleWorlds.MountAndBlade.View.Tableaus`
**Module:** `TaleWorlds.MountAndBlade.View`（Modules.Native）
**Type:** `internal static class BannerTextureCreator`
**Base:** 无
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus/BannerTextureCreator.cs`

## 概述

`BannerTextureCreator` 是 143 行、7 个成员的**静态渲染工厂**。它的职责单一：把一块 [Banner](../../core-extra/Banner/) 渲染成 `Texture`。它为此持有一整套离屏资源——5 个 `private static` 字段（`:12` `_scene`、`:14` `_bannerCamera`、`:16` `_nineGridBannerCamera`、`:18` `_thumbnailCreatorView`、`:20` `_bannerTableauGPUAllocationIndex`），全部是**静态的、进程级的**。

它的生命周期由外部驱动：`Initialize`（`:22`）建 Scene 与两台 Camera，`OnFinalize`（`:35`）逐个清掉并把字段置 null。**8 个调用点全在 `Modules.Native` 内部**：`BannerTableau.cs:99`/`:100`（拿两台相机）、`BannerThumbnailCache.cs:16`/`:22`/`:44`、`BannerEditorTextureCache.cs:41`、`BannerPersistentTextureCache.cs:40`。

## 心智模型

把它当成**「一块共享的离屏画布」**。三条推论：

第一,**它持有 `Scene` 与 `Camera` 这类原生对象，而且是 `static` 的。** `:25` 的 `Scene.CreateNewScene(true, false, (DecalAtlasGroup)0, "mono_renderscene")` 建场景、`:27` 把它命名为 `"ThumbnailCacheManager.BannerScene"`（**注意名字前缀是 ThumbnailCacheManager，而类名是 BannerTextureCreator** —— 命名不一致）。**⇒ 这块画布是全局共享的，多个缩略图缓存同时用同一个。**

第二,**两台 Camera 的差异是视口而不是位置。** `:119` 与 `:124` 传给 `CreateCamera` 的六个参数不同（`left/right/bottom/top`），而 `CreateCamera`（`:127-142`）里 `identity.origin.z = 400f` 与 `LookAt(...)` 两处**对两台完全相同**。**⇒ 差别只在视锥的上下左右边界** —— 一台是九宫格旗（`CreateNineGridBannerCamera`），一台是普通旗（`CreateDefaultBannerCamera`）。

第三,**`Game.Current == null` 时它会多干一件事。** `:93-96`：若没有 `Game.Current`，就用 `new BannerVisualCreator()` 现造一个 `IBannerVisualCreator` 给 `banner.SetBannerVisual(...)`。**⇒ 离线（无 Game 实例）渲染路径会绕过游戏自身的旗视觉管线。**

## 如何使用

**怎么拿到它**：**编译期拿不到**（`internal static class`），也没有 `public` 入口。要触发它渲染，只能通过三个缩略图缓存之一（`BannerThumbnailCache` / `BannerEditorTextureCache` / `BannerPersistentTextureCache`），它们调 `CreateTexture`。

复现「两台相机只差视口」这个事实（这是本页唯一的算术）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Localization;

// BannerTextureCreator.cs:119  CreateDefaultBannerCamera() -> CreateCamera(1/3, 2/3, -2/3, -1/3, 0.001, 510)
// BannerTextureCreator.cs:124  CreateNineGridBannerCamera()  -> CreateCamera(0,   1,   -1,    0,    0.001, 510)
// 而 CreateCamera（:127-142）里 identity.origin.z = 400f 与 obj.LookAt(...) 两处两台完全相同
// ⇒ 差异只在 left/right/bottom/top 四个边界值，near(0.001) 与 far(510) 也相同
TextObject note = new TextObject("{=my_cam}cam params recorded");
note.SetTextVariable("X", 1f / 3f);
Debug.Print(note + " Default=[1/3,2/3,-2/3,-1/3]  NineGrid=[0,1,-1,0]", 0);
```

**用它最容易踩的一条**：**旗代码非法时它返回一个「没有内容」的纹理而不抛异常。** `:103-107`：`if (!Banner.IsValidBannerCode(banner.BannerCode))` 就 `Debug.FailedAssert(...)` 然后 **`return val2;` 直接返回**——而 `val2` 是 `:98` 刚 `CreateRenderTarget` 出来的**空渲染目标**。**⇒ 上层拿到一个非 null 的 `Texture`，看不出它是空的。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `_scene` | `private static Scene _scene` | `:12` 声明、`:25` 建、`:64` 置 null。**所有 `CreateTexture` 的渲染都发生在这个场景里**（`:109` 的 `_scene.AddItemEntity`）。**进程级共享，一个实例。** |
| `_bannerCamera` / `_nineGridBannerCamera` | `private static Camera`（`:14` / `:16`） | 两台相机，`:30`/`:31` 由 `Initialize` 创建。`:82`/`:85` 按 `isTableauOrNineGrid` 二选一传给渲染请求（`:112`）。`OnFinalize` 的 `:52-63` 分别 `ReleaseCamera()` 并置 null。 |
| `_thumbnailCreatorView` | `private static ThumbnailCreatorView _thumbnailCreatorView` | `:18` 声明、`:24` 由 `Initialize` 的形参赋值。**它在 `:29` 注册 Scene、在 `:113` 注册渲染请求** —— 没有它，`CreateTexture` 会在 `:113` 空引用。 |
| `_bannerTableauGPUAllocationIndex` | `private static int _bannerTableauGPUAllocationIndex` | `:20` 声明、`:32` 由 `Utilities.RegisterGPUAllocationGroup("BannerTableauCache")` 取得。**作为 `:112` 渲染请求的分组索引** —— 用来在 GPU 显存统计里把旗纹理的分配归到一组。 |
| `Initialize` | `internal static void Initialize(ThumbnailCreatorView thumbnailCreatorView)` | **建全部静态资源（`:22-33`）。** 七步：存 view → `CreateNewScene` → 关静态阴影（`:26`）→ 命名（`:27`）→ `SetDefaultLighting()` → `RegisterScene` → 建两台相机 → 注册 GPU 分组。**没有幂等保护**：调两次会泄漏第一个 Scene 与两台 Camera。 |
| `OnFinalize` | `internal static void OnFinalize()` | **拆全部静态资源（`:35-65`）。** 逐个判空后清 Decals（`:40`）、`ClearAll`（`:45`）、`ManualInvalidate`（`:50`）、两台相机 `ReleaseCamera`（`:55`/`:61`），最后 `:57`/`:63`/`:64` 把三个字段置 null。**`_thumbnailCreatorView` 与 `_bannerTableauGPUAllocationIndex` 没有被清空。** |
| `CreateTexture` | `internal static Texture CreateTexture(BannerThumbnailCreationBaseData bannerCreationData)` | **本类的主体（`:67-115`）。** 从形参解包出 7 个局部量（`:73-79`）→ 选相机与尺寸（`:82-91`，九宫格且 large 时 512→1024）→ `Game.Current == null` 时补建视觉（`:93-96`）→ 生成 debug id（`:97`）→ 建渲染目标（`:98`）→ **非 Tableau 时立刻 `setAction`（`:99-102`）** → 校验旗代码，非法则返回空纹理（`:103-107`）→ 转多段网格并加进场景（`:108-111`）→ 提交渲染请求（`:112-113`）。 |
| `CreateDefaultBannerCamera` / `CreateNineGridBannerCamera` | `internal static Camera …()` | `:117-120` / `:122-125`，**都是一行委托给 `CreateCamera`**，只传不同的视口四元组。 |
| `CreateCamera` | `private static Camera CreateCamera(float left, float right, float bottom, float top, float near, float far)` | 私有（`:127-142`）。`Camera.CreateCamera()`（`:135`）→ `:137` 把 origin.z 设为 400 → `:139` `LookAt` → `:140` `SetViewVolume(false, …)`。**`SetViewVolume` 的第一个参数是 `false`** —— 我**不断言**它代表什么（投影 vs 正交）。 |

## 真实示例

八个调用点分三类（这是本页的「怎么用」）：

```csharp
using TaleWorlds.Localization;

// ① 初始化 / 收尾：BannerThumbnailCache.cs:16 Initialize(_thumbnailCreatorView)  :22 OnFinalize()
// ② 取相机：BannerTableau.cs:99 CreateDefaultBannerCamera()   :100 CreateNineGridBannerCamera()
//    ⇒ 外部直接复用它的相机，不只通过 CreateTexture
// ③ 渲染：BannerThumbnailCache.cs:44 / BannerEditorTextureCache.cs:41 /
//         BannerPersistentTextureCache.cs:40  三处都调 CreateTexture(textureCreationData)
// ⇒ 三个缩略图缓存共用同一个 _scene 与两台相机（static）
TextObject layout = new TextObject("{=my_layout}8 call sites: 1 init + 1 finalize + 2 camera + 3 render");
Debug.Print(layout.ToString(), 0);
```

`CreateTexture` 的两处「提前返回」（这是最该知道的两个坑）：

```csharp
using TaleWorlds.Localization;

// 坑 1（:99-102）：!flag 即「不是 BannerTextureCreationData」时，渲染请求还没提交
//   setAction?.Invoke(val2) 就已经把空纹理交出去了
//   flag 的定义在 :79  bool flag = !(bannerCreationData is BannerTextureCreationData);
// 坑 2（:103-107）：旗代码非法时 FailedAssert 之后 return val2 —— 而 val2 是 :98 的空渲染目标
//   ⇒ 两种情况都返回「非 null 但没有内容」的 Texture
TextObject warn = new TextObject("{=my_warn}BannerTextureCreator may return an empty texture");
Debug.Print(warn.ToString() + " (no exception path)", 0);
```

## 风险与边界

- **`internal static class`，编译期不可引用。** 8 个调用点全在 `Modules.Native` 内部。
- **静态字段持有原生对象。** `_scene` / `_bannerCamera` / `_nineGridBannerCamera` 都是 `Scene`/`Camera`。**`OnFinalize` 之后它们是 null（`:57`/`:63`/`:64`），而 `CreateTexture` 不判空** —— 收尾之后再调 `CreateTexture` 会在 `:109` 空引用。**我没有找到收尾与再调用之间的守卫**，故不断言实际是否会发生。
- **`Initialize` 无幂等保护。** `:22-33` 直接建新资源，**不检查 `_scene` 是否已存在**。调两次会泄漏第一个 Scene 与两台 Camera。
- **`OnFinalize` 只清 3 个字段。** `_thumbnailCreatorView`（`:18`）与 `_bannerTableauGPUAllocationIndex`（`:20`）**没被置 null** —— 收尾后它们仍指向旧值。
- **旗代码非法返回空纹理而非抛异常。** 见「最容易踩的一条」。`:105` 的 `FailedAssert` 在发布版不弹窗。
- **`SetBannerVisual` 只在 `Game.Current == null` 时被调。** `:93-96`。**⇒ 有 Game 实例时旗视觉由别处设置**，我**没有查那个「别处」是谁**，故不断言。
- **缓存 id 走 [ThumbnailDebugUtility](../ThumbnailDebugUtility/)** —— `:97` 的 `CreateDebugIdFrom(renderId, "ban", debugInfo.CreateName())`。**⇒ 那一页讲到的 127 字符截断风险在这里是活的**，因为第三个参数是外部传入的名字。
- **两台相机的位置相同、只有视口不同。** `:119`/`:124` 的参数差异只在四个边界值；`CreateCamera` 内部 `:137`/`:139` 两台一致。
- **`SetViewVolume` 首参是 `false`。** `:140`。**我不断言它代表投影还是正交。**

## 参见

- 渲染对象：[ThumbnailDebugUtility](../ThumbnailDebugUtility/)（`:97` 的 debug id 生成，127 字符截断）、[ThumbnailCreatorView](../../engine/ThumbnailCreatorView/)（`:29` 注册 Scene、`:113` 注册渲染请求；类型在 `engine/ThumbnailCreatorView.cs`）
- 三个调用方：`Modules.Native/.../Tableaus.Thumbnails/BannerThumbnailCache.cs:16`/`:22`/`:44`、`BannerEditorTextureCache.cs:41`、`BannerPersistentTextureCache.cs:40`、`Tableaus/BannerTableau.cs:99`/`:100`
- 原生对象：`Scene.CreateNewScene`、`Camera.CreateCamera`、`Texture.CreateRenderTarget`、`MetaMesh`、`GameEntity`（均在 `TaleWorlds.Engine`）
- 同桶：[AgentCreationResult](../AgentCreationResult/)、[AgentHelper](../AgentHelper/)、[IMBNetwork](../IMBNetwork/)、[IMBTestRun](../IMBTestRun/)、[IMBWorld](../IMBWorld/)、[IMBAgent](../IMBAgent/)、[IMBMission](../IMBMission/)
- 桶首页：[mission API 分区](../)