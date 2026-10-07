---
title: "CharacterThumbnailCache"
description: "角色立绘缩略图的异步生成缓存：命中缓存就补回调直接返回纹理，未命中就造骨架、摆姿势、注册渲染请求，纹理稍后由回调送回来。参考计数决定何时真的释放。"
---

# CharacterThumbnailCache

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterThumbnailCache : ThumbnailCache<CharacterThumbnailCreationData>`
**Base:** `ThumbnailCache<CharacterThumbnailCreationData>`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails/CharacterThumbnailCache.cs`

## 概述

全文 391 行，是 [ThumbnailCache](../ThumbnailCache/) 泛型基类在「角色」这一个场景下的实现。**它不缓存纹理本身** —— 纹理存在基类的字典里；它管的是「怎么把一个角色画成一张图」以及「这张图在缓存里时怎么把等待者串起来」。

两个自有字段：已生成数量计数器（`CharacterThumbnailCache.cs:13`）与 GPU 分配组下标（`CharacterThumbnailCache.cs:15`），后者在 `CharacterThumbnailCache.cs:25` 由 `Utilities.RegisterGPUAllocationGroup("CharacterTableauCache")` 拿到。

核心方法是 `OnCreateTexture`（`CharacterThumbnailCache.cs:33`），**分成命中与未命中两条完全不同的路径**：

- **命中**（`CharacterThumbnailCache.cs:44`）：有回调集合就把自己追加进去（`:48` 到 `:50`），没有就立刻回调把纹理交出去（`:53`），然后引用计数 +1（`:55`）。

返回值是 `WithExistingTexture`（`CharacterThumbnailCache.cs:56`）。
- **未命中**：造基础实体（`:60`）、摆姿势（`:61`）、算目标尺寸（`:62` 到 `:71`）、注册渲染请求（`:73`）、主动释放临时实体（`:75`）、计数 +1（`:76`）、引用计数 +1（`:78`）、建回调集合（`:81`）、登记回调（`:83` 到 `:84`），返回 `WithNewTexture`（`:85`）。

## 心智模型

把它当成**「点菜厨房」而不是「菜」**。四条推论：

第一，**`OnCreateTexture` 返回的是「要不要等」而不是纹理。** 命中时纹理已经存在，同步给你（`CharacterThumbnailCache.cs:56`）；未命中时纹理还不存在，返回 `WithNewTexture`（`CharacterThumbnailCache.cs:85`）表示「稍后通过 `SetAction` 回调给你」。**你的调用方必须同时支持这两种时序**，否则要么拿到 null 要么永远等不到。

第二，**未命中路径会真的创建并销毁一个 GameEntity。** 造基础实体的方法在 `CharacterThumbnailCache.cs:94`。它在场景里按标签找模板（`:108`），复制（`:114`），改名（`:115`）、去标签（`:116`）、挂进场景（`:117`）。用完立刻销毁（`CharacterThumbnailCache.cs:75`）。**所以「取一张立绘」的瞬时成本包含一次实体拷贝 + 一次销毁，不是纯查表。**

第三，**找不到姿势模板就返回 null，然后整条链路会空引用。** 判空在 `CharacterThumbnailCache.cs:109`，返回 null 在 `CharacterThumbnailCache.cs:111`。**而调用方在 `CharacterThumbnailCache.cs:60` 直接把返回值传给 `FillEntityWithPose`，没有判空。** 场景里缺姿势模板标签 ⇒ NRE。姿势名由 `GetPoseParamsFromCharacterCode`（`CharacterThumbnailCache.cs:131`）算出。

第四，**「随机」的姿势选择是不确定的。** 英雄走非确定性随机，在 8 个 lord 姿势里选一个（`CharacterThumbnailCache.cs:181` 到 `:183`）。非英雄走装备与阵型推断（`CharacterThumbnailCache.cs:188` 之后）。**同一个角色两次生成可能得到不同姿势**，因为用的是非确定性随机数。缓存命中时才稳定。

还有两条边界：默认尺寸是 256×174（小图）或 256×120（大图）（`CharacterThumbnailCache.cs:62` 到 `:63`），**自定义尺寸只在大于 0 时才生效**（`CharacterThumbnailCache.cs:64` 到 `:71`）。释放走 `OnReleaseTexture`（`CharacterThumbnailCache.cs:88`），它只是把引用计数减一（`:91`），**不代表纹理被释放** —— 真正的释放由基类按容量淘汰。

## 如何使用

**拿法：** 通过基类的公开 API，本类通常不由你直接 `new`：

```csharp
using TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails;

// 拿到的是基类接口
ThumbnailCache<CharacterThumbnailCreationData> cache = BannerlordTableauManager.CharacterThumbnailCache;

// 异步形态：setAction 在纹理就绪时被调用（可能同步、也可能下一帧）
cache.GetTexture(new CharacterThumbnailCreationData(
    renderId: "my_mod:hero_42",
    characterCode: Hero.MainHero.CharacterCode,
    isBig: false,
    setAction: texture => Debug.Print("got texture " + (texture != null), 0),
    cancelAction: () => Debug.Print("cancelled", 0),
    customSizeX: 0,
    customSizeY: 0));
```

处理「同步命中 vs 异步未命中」两种时序（这是本类最容易写错的地方）：

```csharp
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails;

public static void RequestThumbnail(string renderId, CharacterCode code)
{
    Texture received = null;
    bool calledBack = false;

    var data = new CharacterThumbnailCreationData(
        renderId,
        code,
        isBig: false,
        // 命中路径在 CharacterThumbnailCache.cs:53 会同步调这里
        setAction: texture => { received = texture; calledBack = true; },
        cancelAction: () => { calledBack = true; },
        customSizeX: 0,
        customSizeY: 0);

    BannerlordTableauManager.CharacterThumbnailCache.GetTexture(data);

    if (!calledBack)
    {
        // 未命中路径：返回 WithNewTexture（CharacterThumbnailCache.cs:85），
        // setAction 会在渲染完成后的某一帧被调用
        return;
    }

    // calledBack == true 且 received == null  => 被取消
    Debug.Print("sync result: " + (received != null), 0);
}
```

诊断「立绘一直不出来」（按 OnCreateTexture 的失败点倒查）：

```csharp
using TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails;

public static string DiagnoseThumbnail(string renderId, CharacterCode code)
{
    // 第一道门：姿势名是否可算（GetPoseParamsFromCharacterCode，CharacterThumbnailCache.cs:131）
    //   英雄走 lord_0..7 的随机分支（:181），非英雄走装备/阵型推断（:188 起）
    // 第二道门：场景里有没有 <poseName>_pose 标签
    //   查找在 CharacterThumbnailCache.cs:108；找不到在 :111 返回 null，
    //   而 :60 不判空 —— 这里会 NRE 而不是静默失败
    // 第三道门：SetAction 是否被登记
    //   登记在 CharacterThumbnailCache.cs:83 与 :84
    return "renderId=" + renderId + " code=" + (code != null) +
           " -> 若 NRE 指向 CharacterThumbnailCache.cs:60，就是姿势模板标签缺失";
}
```

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 类声明 | `public class CharacterThumbnailCache : ThumbnailCache<CharacterThumbnailCreationData>`（`CharacterThumbnailCache.cs:11`） | 非 sealed。命名空间 `TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails`（`CharacterThumbnailCache.cs:9`）。**泛型实参锁死了它的用途** —— 只能处理角色立绘。 |
| `_characterCount` | `private int _characterCount`（`CharacterThumbnailCache.cs:13`） | **只增不减的计数器**，在 `CharacterThumbnailCache.cs:76` 加一。**没有对应的减一** —— 它统计的是「生成过多少次」，不是「当前有多少张」。 |
| `_characterTableauGPUAllocationIndex` | `private int _characterTableauGPUAllocationIndex`（`CharacterThumbnailCache.cs:15`） | GPU 分配组下标，赋值在 `CharacterThumbnailCache.cs:25`。**未初始化就是 0** —— `OnInitialize` 没跑就传 0 给渲染请求。 |
| 构造函数 | `public CharacterThumbnailCache(int capacity) : base(capacity)`（`CharacterThumbnailCache.cs:17`） | 空体，容量直接给基类。**`capacity` 是硬上限**，超出时基类按引用计数淘汰。 |
| `OnInitialize` | `protected override void OnInitialize()`（`CharacterThumbnailCache.cs:22`） | 先调 base，再注册 GPU 分配组（`CharacterThumbnailCache.cs:25`）。 |
| `OnFinalize` | `protected override void OnFinalize()`（`CharacterThumbnailCache.cs:28`） | **只调 base，本类没有额外清理。** GPU 分配组的注销在基类那一侧。 |
| `OnCreateTexture` | `protected override TextureCreationInfo OnCreateTexture(CharacterThumbnailCreationData thumbnailCreationData)`（`CharacterThumbnailCache.cs:33`） | **本类的主方法。** 命中分支从 `CharacterThumbnailCache.cs:44` 起，未命中分支从 `CharacterThumbnailCache.cs:58` 起。**返回 `WithExistingTexture`（`:56`）还是 `WithNewTexture`（`:85`）是调用方判断同步/异步的唯一依据。** |
| `OnReleaseTexture` | `protected override bool OnReleaseTexture(CharacterThumbnailCreationData thumbnailCreationData)`（`CharacterThumbnailCache.cs:88`） | 只做 `RemoveReference(renderId)`（`CharacterThumbnailCache.cs:91`）。**返回 true 表示「可以真正释放」。** |
| `CreateCharacterBaseEntity` | `private GameEntity CreateCharacterBaseEntity(CharacterCode characterCode, Scene scene, ref Camera camera, bool isBig)`（`CharacterThumbnailCache.cs:94`） | **危险的一环。** 找标签在 `CharacterThumbnailCache.cs:108`。找不到返回 null 在 `CharacterThumbnailCache.cs:111`。复制 prefab 在 `CharacterThumbnailCache.cs:114`。挂场景在 `CharacterThumbnailCache.cs:117`。建相机在 `CharacterThumbnailCache.cs:122`。 |
| `GetPoseParamsFromCharacterCode` | `private void GetPoseParamsFromCharacterCode(CharacterCode characterCode, out string poseName, out bool hasHorse)`（`CharacterThumbnailCache.cs:131`） | **姿势名的唯一来源。** 英雄走随机分支（`CharacterThumbnailCache.cs:181` 到 `:183`），非英雄默认 `troop_villager`（`:185`）再按装备与阵型细分（`:188` 起）。 |
| `FillEntityWithPose` | `private GameEntity FillEntityWithPose(CharacterCode characterCode, GameEntity poseEntity, Scene scene)`（`CharacterThumbnailCache.cs:365`） | 给刚复制的实体穿上装备与骨架。三处 `Debug.FailedAssert` 在 `CharacterThumbnailCache.cs:369`、`:374`、`:379` —— **`Debug.FailedAssert`（`Debug.cs:117`）本身有判空与转发，空的是它转发的 `MBDebugManager.cs:33`**（见 [MBDebugManager](../MBDebugManager/)），所以空装备码不会中断，只会在 `:379` 那条报「没有该种族的 monster 数据」。 |

## 真实示例

尺寸计算（默认 256 宽，高由 isBig 决定；自定义只在 > 0 时生效）：

```csharp
// 复刻 CharacterThumbnailCache.cs:62 到 :71
public static void ResolveThumbnailSize(bool isBig, int customSizeX, int customSizeY, out int w, out int h)
{
    int width = 256;                       // CharacterThumbnailCache.cs:62
    int height = isBig ? 120 : 174;        // CharacterThumbnailCache.cs:63

    if (customSizeX > 0)                   // CharacterThumbnailCache.cs:64
    {
        width = customSizeX;
    }

    if (customSizeY > 0)                   // CharacterThumbnailCache.cs:68
    {
        height = customSizeY;
    }

    w = width;
    h = height;
}
```

姿势名的两种产出路径（看清「英雄不确定、非英雄确定」）：

```csharp
using TaleWorlds.Core;

// 复刻 CharacterThumbnailCache.cs:179 到 :185 的分支
public static string ResolvePoseName(CharacterCode code, int nondeterministicRandomInt)
{
    if (code.IsHero)
    {
        // CharacterThumbnailCache.cs:181 —— 非确定性随机，每次可能不同
        int n = nondeterministicRandomInt % 8;
        return "lord_" + n;                 // CharacterThumbnailCache.cs:182
    }

    // CharacterThumbnailCache.cs:185 —— 默认值，随后按装备/阵型覆写
    return "troop_villager";
}
```

复刻「命中 vs 未命中」的两条返回路径：

```csharp
using TaleWorlds.Engine;

// true  = 纹理已就绪，调用方同步拿到
// false = 纹理还没画完，等 setAction 回调
public static bool IsSynchronous(bool cacheHit)
{
    // 命中 -> CharacterThumbnailCache.cs:56 返回 WithExistingTexture
    // 未命中 -> CharacterThumbnailCache.cs:85 返回 WithNewTexture
    return cacheHit;
}
```

复刻未命中路径的完整顺序（每步都有对应的引用计数动作）：

```csharp
// 按 CharacterThumbnailCache.cs:58 到 :85 的顺序
public static string TraceUncachedPath()
{
    var steps = new System.Collections.Generic.List<string>();
    steps.Add("60  CreateCharacterBaseEntity —— 复制 pose prefab 并挂进场景");
    steps.Add("61  FillEntityWithPose          —— 穿装备与骨架");
    steps.Add("62-71 解析尺寸                  —— 256 宽，高 174 或 120");
    steps.Add("73  ThumbnailRenderRequest     —— 注册渲染请求");
    steps.Add("75  ManualInvalidate           —— 临时实体立刻销毁");
    steps.Add("76  _characterCount++          —— 只增不减");
    steps.Add("78  AddReference               —— 引用计数 +1");
    steps.Add("81  建 RenderCallbackCollection");
    steps.Add("83-84 登记 SetAction / CancelAction");
    steps.Add("85  返回 WithNewTexture        —— 调用方需等回调");
    return string.Join("\n", steps);
}
```

## 风险与边界

- **返回 `WithNewTexture` 时纹理还不存在。** 调用方不支持回调时序就拿不到图（`CharacterThumbnailCache.cs:85`）。
- **姿势模板缺失 ⇒ NRE，不是静默失败。** 返回 null 在 `CharacterThumbnailCache.cs:111`，不判空在 `CharacterThumbnailCache.cs:60`。
- **未命中路径会创建并销毁 GameEntity。** 复制在 `CharacterThumbnailCache.cs:114`，销毁在 `CharacterThumbnailCache.cs:75`。
- **英雄姿势用非确定性随机。** `CharacterThumbnailCache.cs:181`，同一角色两次可能不同姿态。
- **`_characterCount` 只增不减。** 它不是「当前缓存数」，别拿它做容量判断（`CharacterThumbnailCache.cs:76`）。
- **`_characterTableauGPUAllocationIndex` 未初始化为 0。** `OnInitialize` 没跑就传 0（`CharacterThumbnailCache.cs:25`）。
- **`OnReleaseTexture` 返回 true 不等于纹理被释放**（`CharacterThumbnailCache.cs:91`）。它只是引用计数减一，真正淘汰由基类按容量做。
- **`GetEnvironmentSpeedFactor` 那类环境依赖在这里没有。** 缩略图渲染发生在独立场景里，环境光照不来自 mission。
- **三处 `FailedAssert` 最终落到一个空方法体**（`CharacterThumbnailCache.cs:369`、`:374`、`:379`）。**装备码错、种族缺 monster 数据都不会中断，只会静默画出空白图。** 注意归因在第二跳：`Debug.FailedAssert`（`Debug.cs:117`）本身有判空与转发（`Debug.cs:121`），空的是它转发的 `MBDebugManager.cs:33`。
- **自定义尺寸只在 > 0 时生效**（`CharacterThumbnailCache.cs:64`、`:68`）。传 0 表示用默认，传负数也走默认。
- **`characterCode` 为 null 会一路传到姿势计算。** `CharacterThumbnailCache.cs:179` 直接读 `code.IsHero`。
- **缓存键是 `renderId` 字符串。** 两个不同角色用同一个 `renderId` 会拿到彼此的纹理。

## 依赖关系

- 本类：`CharacterThumbnailCache.cs:11` 类头、`:13` 与 `:15` 两个字段、`:17` 构造、`:22` 与 `:28` 生命周期钩子（这一句指的都是同一个文件）
- 本类的三个主方法：`CharacterThumbnailCache.cs:33` 的 `OnCreateTexture`（这一句指的都是同一个文件）
- 本类的释放钩子：`CharacterThumbnailCache.cs:88` 的 `OnReleaseTexture`（这一句指的都是同一个文件）
- 本类的实体构造：`CharacterThumbnailCache.cs:94` 的 `CreateCharacterBaseEntity`（这一句指的都是同一个文件）
- 本类的姿势名计算：`CharacterThumbnailCache.cs:131` 的 `GetPoseParamsFromCharacterCode`（这一句指的都是同一个文件）
- 本类的摆姿方法：`CharacterThumbnailCache.cs:365` 的 `FillEntityWithPose`（这一句指的都是同一个文件）
- 基类：[ThumbnailCache](../ThumbnailCache/)（泛型声明在 `ThumbnailCache.cs:10`，渲染视图字段在 `ThumbnailCache.cs:14`，回调字典在 `ThumbnailCache.cs:20`）；接口 [IThumbnailCache](../IThumbnailCache/)
- 基类的查表入口：`ThumbnailCache.cs:147` 的 `GetValue`（这一句指的都是同一个文件）
- 基类的引用计数：`ThumbnailCache.cs:187` 的 `AddReference`（这一句指的都是同一个文件）
- 请求与返回类型：[ThumbnailCreationData](../ThumbnailCreationData/)（泛型约束 `where T : ThumbnailCreationData`，见 `ThumbnailCache.cs:10`）与 [TextureCreationInfo](../TextureCreationInfo/)
- 场景与渲染：[BannerlordTableauManager](../BannerlordTableauManager/) 的 `TableauCharacterScenes`；[EngineApplicationInterface](../../engine/EngineApplicationInterface/) 提供 `RegisterGPUAllocationGroup`
- 类型来源：[CharacterCode](../../core-extra/CharacterCode/)（`TaleWorlds.Core`）、[Monster](../../core-extra/Monster/)、[Equipment](../../core-extra/Equipment/)
- 断言落地：[Debug](../../core-extra/Debug/) 的 `FailedAssert`（`Debug.cs:117`，**有判空与转发**），它转发的目标 `MBDebugManager.cs:33` 才是空体（见 [MBDebugManager](../MBDebugManager/)）
- 桶首页：[mission-ext API 分区](../)