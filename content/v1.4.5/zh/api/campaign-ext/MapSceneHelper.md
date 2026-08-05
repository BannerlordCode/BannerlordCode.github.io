---
title: "MapSceneHelper"
description: "Sandbox 辅助类：把 PartyNavigationModel 的地形规则转为 MapScene 加载期间使用的布尔区域映射。"
---
# MapSceneHelper

**命名空间：** `SandBox.SandBoxHelpers`  
**模块：** `SandBox`  
**类型：** `public static class MapSceneHelper`  
**基类：** 无  
**源码：** `Modules.SandBox/SandBox/Sandbox/SandBoxHelpers.cs`

## 一句话职责

构建按地形枚举索引的陆地/区域有效性数组，供具体地图场景传给原生导航网格；它把活动 `PartyNavigationModel` 的通行规则转换为原生场景初始化需要的输入。

## 概述

这个嵌套静态 helper 不保存地图状态，也不改变战役规则。它把活动 `PartyNavigationModel` 对每个地形的判断编码成原生场景加载所需的数组，让导航网格与 Campaign 的默认通行策略保持同一份输入。

## 心智模型

这是 Sandbox 地图加载路径里的纯转换辅助。`MapScene.Load` 接收当前 [PartyNavigationModel](../../campaign/PartyNavigationModel)，调用 `GetRegionMapping`，再将结果传给 `Scene.SetNavMeshRegionMap`。它不持有导航策略，也不修改模型，而是对每个 `TerrainType` 调用 `IsTerrainTypeValidForNavigationType(value, MobileParty.NavigationType.Default)`。

要实现兼容的地图加载器并需要相同区域映射时使用它。不要跨 `PartyNavigationModel` 替换缓存结果，也不要把它当作判断某个具体部队能否移动的 API；应直接询问活动模型。

## 依赖图

- 调用者：[MapScene](../MapScene) 的 `Load`。
- 输入策略：[PartyNavigationModel](../../campaign/PartyNavigationModel)。
- 输入枚举：[TerrainType](../../core-extra/TerrainType)。
- 运行时消费者：原生 `Scene` 导航网格，随后是 [IMapScene](../../campaign/IMapScene) 与 [NavigationHelper](../../system/NavigationHelper)。

## 公共成员

### `GetRegionMapping(PartyNavigationModel model)`

返回以 `TerrainType` 整数为索引的 `bool[]`。数组长度比最大枚举值大一，每项由传入模型判断该地形是否对 `MobileParty.NavigationType.Default` 有效。它不改变模型；返回数组由调用者负责。

```csharp
PartyNavigationModel navigationModel = Campaign.Current.Models.PartyNavigationModel;
bool[] regionMapping = SandBoxHelpers.MapSceneHelper.GetRegionMapping(navigationModel);
```

游戏的正常调用发生在 `MapScene.Load` 内部；mod 通常应读取 `Campaign.Current.MapSceneWrapper`，而不是重新建立原生地图。

## 风险

- `model` 为 `null` 时，逐项询问地形会触发空引用。
- 返回值不是持久化存档数据；活动模型或地图变化时要重新计算。
- 若传入模型的地形规则与当前地图不匹配，原生导航和战役移动规则会产生分歧。

## 导航

### ↑ 父级

- [Campaign 扩展索引](../)
- [MapScene](../MapScene)

### ↔ 同级与相关类型

- [PartyNavigationModel](../../campaign/PartyNavigationModel)
- [IMapScene](../../campaign/IMapScene)
- [NavigationHelper](../../system/NavigationHelper)
