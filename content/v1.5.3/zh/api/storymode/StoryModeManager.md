---
title: "StoryModeManager"
description: "主线战役状态的单例门面：一个战役一个实例，向上给 MainStoryLine、事件总线和剧情专属英雄，向下被 CampaignStoryMode 存档。"
---
# StoryModeManager

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public class StoryModeManager`
**Base:** `System.Object`
**Source:** `bannerlord-1.5.3/StoryMode/StoryModeManager.cs`

## 概述

`StoryModeManager` 是主线战役的**状态聚合根**，本身没有基类、也不实现任何引擎接口，纯粹是一个 POCO 风格的容器。它把四样东西挂在同一个对象上：[StoryModeEvents](../StoryModeEvents) 事件总线、[MainStoryLine](../MainStoryLine) 主线状态机、以及两个只读的剧情对象集合 [StoryModeHeroes](../StoryModeHeroes) 和 [StoryModeBannerEffects](../StoryModeBannerEffects)。真正天天在用的其实是它的静态属性 `Current`——全项目 200 多处引用几乎都走这条路，而不是通过 [CampaignStoryMode](../CampaignStoryMode) 逐层拿。

## 心智模型

**它的实例归属于某个 `CampaignStoryMode` 实例**，生命周期与该战役严格同寿：`CampaignStoryMode` 构造函数里 `new StoryModeManager()`，战役结束由 `StoryModeSubModule.OnGameEnd` 调 `Destroy()`，存档时作为 `Campaign` 的一个成员被序列化（id 1）。

关键的分期初始化是这个类最容易踩坑的地方：

- 构造函数阶段：`Initialize()` 建 [StoryModeEvents](../StoryModeEvents)，然后 `new MainStoryLine()`。此刻 `StoryModeHeroes` 和 `StoryModeBannerEffects` 都是 **null**。
- 读档阶段：`[LoadInitializationCallback] OnLoad(MetaData)` 再次调 `Initialize()`，重建事件总线。但**不会**重建 `MainStoryLine`——主线从存档字段里恢复。
- 战役对象就绪阶段：`InitializeStoryModeObjects()`（由 `CampaignStoryMode.DoLoadingForGameType` 在 `InitializeFirstStep` 触发）才 `new StoryModeHeroes()` 和 `new StoryModeBannerEffects()`。这两个都是 `internal` 构造函数，只有走这条路径才会存在。

`Current` 的实现是 `((Game.Current?.GameType) as CampaignStoryMode)?.StoryMode`，所以**在主菜单、沙盒战役、以及游戏刚退出但 `Game.Current` 还在的时刻，一律返回 null**。

**典型调用顺序**：战役加载完成 → 任意 behavior 的 `RegisterEvents` 里 `StoryModeManager.Current.MainStoryLine` 读状态 → 玩家选择阵营时 `MainStoryLine.SetStoryLineSide(...)` → 事件经 `StoryModeEvents.Instance` 广播。

**坑**：

1. 不要把 `StoryModeManager.Current` 缓存到静态字段。战役 A 结束后 `Game.Current.GameType` 可能还是旧引用，换档就读到脏数据。
2. `StoryModeHeroes` / `StoryModeBannerEffects` 是 `{ get; private set; }` 的**实例**属性，但它们的公开成员全是 **static**，内部再转发到 `StoryModeManager.Current`。也就是说这两个属性实际上没人通过 `Current.StoryModeHeroes` 读——都是 `StoryModeHeroes.ImperialMentor` 这样直接静态调。写了却没人用，但序列化时会照存。
3. `Destroy()` 是 `internal`，只能由 `StoryModeSubModule` 调用。它自己只做一件事：转发 `StoryModeData.OnGameEnd()` 清静态缓存。

## 主要成员

- `static StoryModeManager Current { get; }`：全局访问点。返回当前战役的 manager，非主线战役或无战役时为 null。**每次使用前判空**，这是全项目最常见的 NRE 来源。
- `MainStoryLine MainStoryLine { get; private set; }`：`[SaveableProperty(1)]`，主线进度。构造函数里创建，读档时从存档恢复。永远是主线的唯一权威。
- `StoryModeEvents StoryModeEvents { get; private set; }`：**不存档**，每次 `Initialize()` 重建。要订阅事件请在 behavior 的 `RegisterEvents` 里做，不要指望存档保留监听关系。
- `StoryModeHeroes StoryModeHeroes { get; private set; }`：不存档，战役加载后创建。实际请用 `StoryModeHeroes.ImperialMentor` 这类静态属性。
- `StoryModeBannerEffects StoryModeBannerEffects { get; private set; }`：同上，实际用 `StoryModeBannerEffects.DragonBannerEffect`。
- `StoryModeManager()`：公开构造函数。`new` 一个出来只会拿到一个有事件总线、有主线、但没有剧情英雄的半成品。正常代码不要 new。
- `[LoadInitializationCallback] private void OnLoad(MetaData metaData)`：读档回调，只重建 `StoryModeEvents`。
- `internal void InitializeStoryModeObjects()`：创建剧情英雄与旗帜效果，只能由 `CampaignStoryMode` 在正确的加载节点调。
- `internal void Destroy()`：战役结束时清静态缓存。

## 使用示例

```csharp
public class MyStoryModeBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // 在行为注册期订阅；CampaignStoryMode 已在 InitializeFirstStep 之后建好了事件总线
        StoryModeEvents.OnMainStoryLineSideChosenEvent.AddNonSerializedListener(
            this, new Action<MainStoryLineSide>(side =>
            {
                if (side == MainStoryLineSide.CreateAntiImperialKingdom)
                {
                    Debug.Print("玩家自立反帝国");
                }
            }));
    }

    public override void DailyTick()
    {
        StoryModeManager manager = StoryModeManager.Current;
        if (manager == null)
        {
            return; // 非主线战役
        }

        MainStoryLine line = manager.MainStoryLine;
        if (line.SecondPhase != null && line.SecondPhase.ConspiracyStrength < SecondPhase.MaxConspiracyStrength)
        {
            Debug.Print("第二阶段进行中，阴谋强度 " + line.SecondPhase.ConspiracyStrength);
        }
    }
}
```

## 风险与边界

- **null 是一等公民**：`Current` 在主菜单、沙盒战役、编辑器测试场景都返回 null。任何 `StoryModeManager.Current.MainStoryLine` 的直接解引用都要先判空。
- **事件总线不参与存档**：`StoryModeEvents` 是每次 `Initialize()` 重建的对象，读档后所有监听关系消失。这就是原生代码在 `RegisterEvents` 里 `AddNonSerializedListener` 的原因。
- **半初始化窗口**：`StoryModeHeroes` 为 null 的时段是「战役已 new 但加载未走完」。自定义 behavior 若在更早的钩子注册里访问剧情英雄会崩。
- **不要跨战役持有**：把 `StoryModeManager.Current` 存进静态字段在连续开局/读档时会指向旧战役。

## 依赖关系

- [CampaignStoryMode](../CampaignStoryMode) — 拥有并保存本对象，`Current` 靠向下转型拿到它
- [MainStoryLine](../MainStoryLine) — 构造函数创建的唯一可存档进度状态
- [StoryModeEvents](../StoryModeEvents) — 事件总线，`Initialize()` 里重建
- [StoryModeHeroes](../StoryModeHeroes) — 加载完成后创建的一组剧情英雄
- [StoryModeBannerEffects](../StoryModeBannerEffects) — 加载完成后创建的旗帜效果
- [StoryModeSubModule](../StoryModeSubModule) — 唯一调用 `Destroy()` 的地方