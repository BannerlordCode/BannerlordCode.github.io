---
title: "AtmosphereGrid"
description: "大气节点的加权插值器：把地图场景读进来的一组 AtmosphereState 按距离做 SmoothStep 加权平均，返回任意 Vec3 处的温度 / 湿度 / 色调分级。全树唯一的调用方是 DefaultMapWeatherModel。"
---

# AtmosphereGrid

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AtmosphereGrid`
**Base:** 无（直接继承 object）
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/AtmosphereGrid.cs`

## 概述

`AtmosphereGrid` 是**天气系统的空间插值层**。地图场景（`MapSceneWrapper`）通过 `GetAtmosphereStates()` 给出一组离散的 [AtmosphereState](../../core-extra/AtmosphereState) 节点，每个节点带一个位置、温度均值 / 方差、湿度均值 / 方差、两个衰减半径和一張色调分级贴图名。`AtmosphereGrid` 负责回答一个问题：**给定世界坐标 `Vec3 pos`，这里的温度、湿度和色调是哪些节点加权出来的？**

在体系里它承担的是**「连续化」这一环**——上游给的是离散采样点，天气模型要的是任意点的连续值。1.4.5 的实现是**反距离加权 + SmoothStep 权重衰减**：

```csharp
pos.z *= 0.3f;
list.Sort((x, y) => x.Position.Distance(pos).CompareTo(y.Position.Distance(pos)));
...
float num3 = 1f - MBMath.SmoothStep(
    atmosphereState2.distanceForMaxWeight,
    atmosphereState2.distanceForMinWeight,
    value);
```

只有权重不小于 0.001 的节点参与累加，最后按权重总和归一化。`ColorGradeTexture` **不参与平均**——它取权重最高的那个节点的贴图名（第一个 `flag` 为 true 的分支），这是视觉资产不能做数值平均的现实妥协。

全树只有一个调用方：[DefaultMapWeatherModel](../DefaultMapWeatherModel) 在 `DefaultMapWeatherModel.cs:91` 里 `new AtmosphereGrid()` 并调 `Initialize()`，之后每次 `GetInterpolatedAtmosphereState` 都转发到 `GetInterpolatedStateInfo`（`DefaultMapWeatherModel.cs:88-93`）。

## 心智模型

把它当成**「离散大气节点的加权平均器」**就对了。

- **两步式使用，顺序不能反。** 先 `Initialize()` 把地图场景的节点 `ToList()` 拷进 `_states` 私有字段，再反复调 `GetInterpolatedStateInfo(pos)`。**不调 `Initialize()` 就查询，`states` 是空列表**——此时方法不抛，而是走完整个循环后因为 `num2 == 0f` 跳过归一化，返回一个**只有 `ColorGradeTexture` 被设成 `"color_grade_empire_harsh"` 的全零 `AtmosphereState`**（`AtmosphereGrid.cs:42` 与 `62`）。这是静默失效，不是异常。
- **`pos.z` 会被就地改写。** `AtmosphereGrid.cs:36` 的 `pos.z *= 0.3f;` 改的是**值类型副本**（`Vec3` 是 struct），所以不会影响调用方的向量——但也意味着垂直方向的权重被人为压扁了 3.3 倍。想知道真实三维距离就用别的方法算。
- **每次查询都是一次全量排序。** `GetInterpolatedStateInfo` 每次调用都新建一个 `List<AtmosphereStateSortData>`、把全部节点搬进去、然后 `Sort`。节点多、调用频繁时这是明显的分配热点。**它不适合放进逐帧路径**，天气模型 4 小时一次更新是合理的频率。
- **`ColorGradeTexture` 取最近的有效节点，不做平均。** 第一个权重 ≥ 0.001 的节点直接胜出，后续节点只累加数值字段。这就是为什么你会看到 `"color_grade_empire_harsh"` 这个帝国 harsh 默认值——它是**完全没匹配上任何节点时的兜底**。
- **`Initialize()` 依赖 `Campaign.Current` 与地图场景。** `Campaign.Current.MapSceneWrapper` 为 null 时 NRE。地图场景切换（换地图 mod、进入战役前）后**需要重新 `Initialize()`**，因为缓存的是上一张地图的节点。

### 数据流全貌

```text
IMapScene.GetAtmosphereStates()
  -> AtmosphereGrid.Initialize()  把 List 拷进私有 states
  -> GetInterpolatedStateInfo(Vec3 pos)
       pos.z *= 0.3
       按 Distance(pos) 升序排全部节点
       逐个算 weight = 1 - SmoothStep(distanceForMaxWeight, distanceForMinWeight, dist)
       weight >= 0.001 才参与：
         第一个命中的节点决定 ColorGradeTexture
         四个数值字段做 weight * value 累加
       totalWeight > 0 时全部除以 totalWeight
  -> 返回一个 AtmosphereState
  -> DefaultMapWeatherModel 用它推导温度 / 湿度 / 环境光
```

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Initialize()` | `public void Initialize()` | 唯一的装载步骤。`states = Campaign.Current.MapSceneWrapper.GetAtmosphereStates().ToList()`（`AtmosphereGrid.cs:21`）。**依赖 `Campaign.Current` 与已加载的地图场景**，两者任一为 null 直接 NRE。**换地图后必须重调**，否则继续用旧地图的节点插值。 |
| `GetInterpolatedStateInfo(Vec3 pos)` | `public AtmosphereState GetInterpolatedStateInfo(Vec3 pos)` | 唯一查询入口。返回**新 new 的** `AtmosphereState`，从不复用或修改缓存节点。**每次调用新建排序列表并全量排序**；空 `states` 时返回全零 + `"color_grade_empire_harsh"`，不抛异常。 |

## 怎么用

这是地图天气系统背后的空间插值器：它持有一批从地图场景读出来的 `AtmosphereState` 采样点，按查询位置做一次加权插值，返回该点的温湿度均值与方差以及调色纹理。它不注册为行为也不注册为模型，而是被天气模型私有持有。

**怎么拿到它**：声明在 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/AtmosphereGrid.cs:8`。唯一持有者是 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultMapWeatherModel.cs:59` 的私有字段 `_atmosphereGrid`，它在 `DefaultMapWeatherModel.cs:89` 的空判断后于 `:91` 构造、`:92` 调 `Initialize()`，最后在 `DefaultMapWeatherModel.cs:94` 把查询转给它。模型本身的注册点是 `SandBoxManager.cs:250` 的 `gameStarter.AddModel(new DefaultMapWeatherModel())`。

它有两个方法，形状和生命周期都很直白：`Initialize()` 在 `AtmosphereGrid.cs:19`，把 `Campaign.Current.MapSceneWrapper.GetAtmosphereStates()` 的结果整体拷进私有 `states` 列表；`GetInterpolatedStateInfo(Vec3 pos)` 在 `AtmosphereGrid.cs:24`，内部先把所有采样点连同原始下标装进一个排序结构，按距离排序后逐个累加。

```csharp
AtmosphereGrid grid = new AtmosphereGrid();
grid.Initialize();                       // 必须先 Initialize，否则 states 为空
Vec3 probe = MobileParty.MainParty.Position;
AtmosphereState state = grid.GetInterpolatedStateInfo(probe);
Debug.Print("温度=" + state.TemperatureAverage + " 湿度=" + state.HumidityAverage, 0);
Debug.Print("温度方差=" + state.TemperatureVariance + " 调色=" + state.ColorGradeTexture, 0);
```

权重公式是 `1 - SmoothStep(distanceForMaxWeight, distanceForMinWeight, 实际距离)`，权重小于 `0.001` 的采样点直接跳过，所以远处的点对结果没有贡献。查询前 `pos.z` 会被乘以 `0.3f`（`AtmosphereGrid.cs:36`），这是刻意的——垂直方向要压缩，否则地图高度差会盖过水平距离。

**最常见的坑**：忘记调 `Initialize()` 就直接查询。此时 `states` 是空列表，`num2` 保持为 0，除法不执行，你会拿到一个 `ColorGradeTexture` 是默认字符串、四个数值全为 0 的 `AtmosphereState`，而且**不抛任何异常**。

## 真实示例

标准的官方用法（形状直接照 `DefaultMapWeatherModel.cs:88-93` 的写法）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;

public static AtmosphereState SampleAt(Vec3 worldPosition)
{
    if (Campaign.Current == null || Campaign.Current.MapSceneWrapper == null)
    {
        return null;
    }

    AtmosphereGrid grid = new AtmosphereGrid();
    grid.Initialize();

    AtmosphereState sampled = grid.GetInterpolatedStateInfo(worldPosition);
    Debug.Print("temp=" + sampled.TemperatureAverage + " humidity=" + sampled.HumidityAverage, 0);
    return sampled;
}
```

不自己 new，直接问天气模型——它内部已经持有一个初始化好的实例，重复 new 会重复排序：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;

CampaignVec2 position = MobileParty.MainParty.Position;
AtmosphereState sampled = Campaign.Current.Models.MapWeatherModel.GetInterpolatedAtmosphereState(
    CampaignTime.Now, position.AsVec3());

if (sampled != null)
{
    Debug.Print("color grade = " + sampled.ColorGradeTexture, 0);
    Debug.Print("temp var = " + sampled.TemperatureVariance, 0);
}
```

地图切换后重建（`Initialize` 是幂等的覆盖式赋值，重建成本就是一次 `ToList()`）：

```csharp
using TaleWorlds.CampaignSystem;

public static AtmosphereGrid RebuildForCurrentMap()
{
    if (Campaign.Current == null || Campaign.Current.MapSceneWrapper == null)
    {
        return null;
    }

    AtmosphereGrid grid = new AtmosphereGrid();
    grid.Initialize();
    return grid;
}
```

## 风险与边界

- **不调 `Initialize()` 是静默失效，不是崩溃。** `states` 保持空列表，查询返回 `TemperatureAverage` / `HumidityAverage` 全 0 且 `ColorGradeTexture` 为 `"color_grade_empire_harsh"` 的对象。天气模型拿它算出来的结果不会报错，只会是一团糟。
- **依赖 `Campaign.Current.MapSceneWrapper`。** 主菜单、模块加载早期、地图尚未建好时 `Initialize()` 直接 NRE。
- **缓存跨地图失效。** `states` 存的是某一张地图的节点。换地图后不重新 `Initialize()`，就会用旧地图的坐标去插值新地图的位置，权重分布全错。
- **`pos.z` 被压扁到 0.3 倍。** `AtmosphereGrid.cs:36` 就地乘系数。`Vec3` 是 struct 所以不影响调用方的变量，但这意味着**垂直方向上的节点几乎等距**，插值结果对高度不敏感。
- **每次查询都是 O(n log n) 全量排序 + 两次遍历 + 一次 `List` 分配。** 放进逐帧路径会显著抬高 GC 压力。官方模型 4 小时更新一次是合理频率；你的行为不要擅自加密。
- **权重阈值是硬编码的 0.001。** `AtmosphereGrid.cs:48` 的 `if (!((double)num3 < 0.001))` 用的是「不小于」而不是「大于」，语义等价但写法绕。低于阈值的节点完全不参与，包括它们的 `ColorGradeTexture`。
- **`ColorGradeTexture` 不做平均。** 取第一个有效节点的值。这意味着两个色调差异很大的区域交界处会硬跳变，没有过渡。
- **`states` 是私有字段，没有清空 API。** 想彻底丢弃只能丢掉整个 `AtmosphereGrid` 实例。
- **返回值是新对象。** 修改返回的 `AtmosphereState` 不会影响缓存，也不会影响下一次查询。

## 跨版本提示

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/AtmosphereGrid.cs` 是 72 行原始源码，内含私有嵌套 struct `AtmosphereStateSortData`（`Vec3 Position` + `int InitialIndex`）。跨版本比对时盯四点：`pos.z *= 0.3f` 这个压扁系数是否还在、0.001 权重阈值是否还在、`"color_grade_empire_harsh"` 这个兜底字符串是否还在、以及 `ColorGradeTexture` 是否仍然取最近节点而不平均。任一处改动都会让自定义天气 mod 的表现漂移。

## 依赖关系

- 唯一调用方：`DefaultMapWeatherModel.cs:91` 里的 `new AtmosphereGrid()` + `Initialize()`，随后 `GetInterpolatedAtmosphereState` 转发到本类型——见 [DefaultMapWeatherModel](../DefaultMapWeatherModel)
- 数据来源：`IMapScene.GetAtmosphereStates()`（在 `TaleWorlds.CampaignSystem.Map` 的 `IMapScene.cs:72`）经 `Campaign.Current.MapSceneWrapper` 拿到，是 `Initialize()` 的唯一输入
- 元素类型：[AtmosphereState](../../core-extra/AtmosphereState)（定义在 `TaleWorlds.Core/AtmosphereState.cs`）携带 `Position` / `TemperatureAverage` / `TemperatureVariance` / `HumidityAverage` / `HumidityVariance` / `distanceForMaxWeight` / `distanceForMinWeight` / `ColorGradeTexture`
- 权重函数：`MBMath.SmoothStep` 与 `Vec3.Distance`，都来自 `TaleWorlds.Library`
- 对外模型入口：[MapWeatherModel](../MapWeatherModel) 的 `GetInterpolatedAtmosphereState(CampaignTime, Vec3)` 是 mod 应该调用的公共接口，而不是直接 new 本类型
- 私有排序辅助：嵌套 struct `AtmosphereStateSortData` 只在本文件内使用，用来在排序后回到原列表下标
- 桶首页：[campaign API 分区](../)
