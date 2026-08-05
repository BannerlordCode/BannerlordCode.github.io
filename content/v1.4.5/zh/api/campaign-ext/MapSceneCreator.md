---
title: "MapSceneCreator"
description: "Sandbox 的 IMapSceneCreator 实现，创建 Campaign 世界地图使用的具体 MapScene。"
---
# MapSceneCreator

**命名空间：** `SandBox`  
**模块：** `SandBox`  
**类型：** `public class MapSceneCreator : IMapSceneCreator`  
**基类：** [IMapSceneCreator](../../campaign/IMapSceneCreator)  
**源码：** `Modules.SandBox/SandBox/Sandbox/MapSceneCreator.cs`

## 一句话职责

在 Campaign 初始化战略世界地图时提供 Sandbox 的具体地图场景包装器，并确保返回的 `MapScene` 由 Campaign 按完整的加载、边界读取、后置初始化和销毁顺序管理。

## 概述

该类型本身没有地图状态，也不负责读取场景文件；它只是 Sandbox 注册到 Campaign 的工厂适配器。Campaign 通过它获得 `MapScene` 后，才会按统一生命周期加载和初始化地图。

## 心智模型

`MapSceneCreator` 是模块启动链中的小型适配器。`SandBoxSubModule.OnGameInitializationFinished` 把它赋给 `Campaign.MapSceneCreator`；Campaign 之后通过显式的 `IMapSceneCreator.CreateMapScene` 实现调用它。调用结果是新的 [MapScene](../MapScene)，但此时尚未加载。接下来的场景级别、`Load`、边界和 `AfterLoad` 都由 Campaign 负责。

把它当作默认提供者的参考，或在实现完整地图场景后替换 creator。普通 mod 代码应通过 [IMapScene](../../campaign/IMapScene) 查询已经加载的 `Campaign.Current.MapSceneWrapper`；自行构造 `MapSceneCreator` 会绕过 Campaign 生命周期。

## 依赖图

- `SandBoxSubModule` 在 [Campaign](../../campaign/Campaign) 上注册它。
- 它实现 [IMapSceneCreator](../../campaign/IMapSceneCreator)。
- 它创建实现 [IMapScene](../../campaign/IMapScene) 的 [MapScene](../MapScene)。
- 结果被 [PartyNavigationModel](../../campaign/PartyNavigationModel)、[NavigationHelper](../../system/NavigationHelper)、天气和地图视觉使用。

## 公共入口

### `CreateMapScene()`

这是显式接口实现，应通过 `IMapSceneCreator` 引用调用。它返回 `(IMapScene)new MapScene()`，不会读取场景文件；调用方必须继续遵循 Campaign 的加载生命周期。

## 真实获取路径

```csharp
Campaign campaign = Campaign.Current;
if (campaign != null && campaign.MapSceneCreator != null && campaign.MapSceneWrapper != null)
{
    IMapSceneCreator creator = campaign.MapSceneCreator;
    bool usingSandboxProvider = creator is MapSceneCreator;
    IMapScene mapScene = campaign.MapSceneWrapper;
    Vec2 terrainSize = mapScene.GetTerrainSize();
}
```

这个示例检查 Sandbox 实际注册的 creator，并读取 Campaign 已拥有的包装器。不要在这里调用 `creator.CreateMapScene()`；返回实例必须由 Campaign 持有并执行完整加载序列。

## 风险

- 手动调用工厂会创建不受 Campaign 所有、未加载也不会由 Campaign 销毁的包装器。
- `MapSceneWrapper` 创建后修改 `Campaign.MapSceneCreator` 不会替换活动地图。
- 自定义替换必须实现 `IMapScene` 全部生命周期和查询；空壳会破坏导航和天气调用者。

## 导航

### ↑ 父级

- [Campaign 扩展索引](../)
- [IMapSceneCreator](../../campaign/IMapSceneCreator)

### ↔ 同级与相关类型

- [MapScene](../MapScene)
- [IMapScene](../../campaign/IMapScene)
- [Campaign](../../campaign/Campaign)
- [PartyNavigationModel](../../campaign/PartyNavigationModel)
