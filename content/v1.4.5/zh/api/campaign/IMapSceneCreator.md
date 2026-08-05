---
title: "IMapSceneCreator"
description: "Campaign 启动阶段提供 IMapScene 实现并填充 Campaign.MapSceneWrapper 的地图场景工厂契约。"
---
# IMapSceneCreator

**命名空间：** `TaleWorlds.CampaignSystem.Map`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public interface IMapSceneCreator`  
**基类：** 无  
**源码：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Map/IMapSceneCreator.cs`

## 一句话职责

在 Campaign 启动与模块具体地图实现之间创建战役地图场景包装器，并把场景的所有权交给 Campaign 的统一加载、边界计算、后置初始化和销毁流程；它本身只负责创建，不负责替代活动地图或保存原生句柄。

## 概述

它只负责提供一个完整的 `IMapScene` 实例，真正的资源加载、边界计算、后置初始化和销毁仍由 Campaign 的地图加载流程负责。普通查询不应绕过活动包装器重新创建场景。

## 心智模型

这是启动依赖，不是 mod 每次需要地形时都调用的工厂。`Campaign.MapSceneCreator` 持有注册的工厂。1.4.5 中 `SandBoxSubModule.OnGameInitializationFinished` 安装 `new MapSceneCreator()`；随后 `Campaign.LoadMapScene` 调用 `CreateMapScene`、设置场景级别、`Load`、读取边界并调用 `AfterLoad`。结果通过 `Campaign.MapSceneWrapper` 暴露给导航、天气、地图 AI 和视觉系统。

需要提供完整自定义地图实现时，在 Campaign 加载地图前使用此契约。普通读取应使用 `Campaign.Current.MapSceneWrapper`。不要在 tick 中调用 `CreateMapScene` 或在 Campaign 旁边创建第二个包装器，否则面、边界、天气与 CRC 会产生分歧。

## 依赖图

- 持有者：[Campaign](../Campaign) 暴露 `MapSceneCreator` 与 `MapSceneWrapper`。
- 具体提供者：[MapSceneCreator](../../campaign-ext/MapSceneCreator) 返回 [MapScene](../../campaign-ext/MapScene)。
- 生命周期：`Campaign.LoadMapScene` 负责 `CreateMapScene -> SetSceneLevels -> Load -> GetMapBorders -> AfterLoad`。
- 下游读取：[IMapScene](../IMapScene)、[PartyNavigationModel](../PartyNavigationModel)、[MobileParty](../MobileParty)、天气与导航缓存。

## 公共成员

### `CreateMapScene()`

`IMapScene CreateMapScene()` 返回新的包装器。方法本身不读取原生地图；Campaign 会紧接着执行其余生命周期。自定义实现必须完整实现 `IMapScene`，并让场景、面数据、天气数据与 CRC 保持一致。

## 真实注册示例

Sandbox 的注册链是具体获取路径。确实要替换提供者时，必须在 Campaign 到达 `LoadMapScene` 前完成，并保留完整生命周期：

```csharp
public sealed class CustomMapSceneCreator : IMapSceneCreator
{
    public IMapScene CreateMapScene()
    {
        return new CustomMapScene();
    }
}

public class MapModule : MBSubModuleBase
{
    protected override void OnGameInitializationFinished(Game game)
    {
        Campaign campaign = game.GameType as Campaign;
        if (campaign != null)
        {
            campaign.MapSceneCreator = new CustomMapSceneCreator();
        }
    }
}
```

`CustomMapScene` 必须是真正的 `IMapScene` 实现。包装器已经创建后再替换 creator，不会迁移当前活动场景。

## 崩溃与存档风险

- 返回 `null`、半成品实现或没有初始化原生资源的包装器，会在 `Campaign.LoadMapScene` 阶段失败。
- creator 只在启动阶段被使用；包装器创建后修改它只影响未来的工厂调用，当前 Campaign 仍使用旧包装器。
- 不要保存 creator、包装器、原生 `Scene` 或面缓存；它们是运行时资源，加载存档后必须重建。
- `MapSceneWrapper` 的调用者假设全局只有一个场景，且 XML/navigation CRC 匹配。不同资源的替换会使导航缓存和地图行为失效。

## 导航

### ↑ 父级

- [Campaign API 索引](../)
- [Campaign](../Campaign)

### ↔ 同级与相关类型

- [IMapScene](../IMapScene)
- [MapSceneCreator](../../campaign-ext/MapSceneCreator)
- [MapScene](../../campaign-ext/MapScene)
- [MBSubModuleBase](../../core/MBSubModuleBase)
