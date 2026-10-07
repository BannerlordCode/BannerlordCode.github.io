---
title: "AtmosphereState"
description: "天气网格上的一个采样点：位置、温度均值与方差、湿度均值与方差，外加两个小写命名的距离权重（distanceForMaxWeight / distanceForMinWeight）和一个色调贴图名。它不是 AtmosphereInfo——它由 Campaign 侧插值成后者，本身不参与序列化。"
---

# AtmosphereState

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class AtmosphereState`
**Base:** 无
**File:** `TaleWorlds.Core/AtmosphereState.cs`

## 概述

`AtmosphereState` 是**地图天气网格上的一个采样点**。它记录一个位置（`Position`）、该处的温度均值与方差（`TemperatureAverage` / `TemperatureVariance`）、湿度均值与方差（`HumidityAverage` / `HumidityVariance`）、一个色调贴图名（`ColorGradeTexture`），以及**两个小写命名的距离权重**（`distanceForMaxWeight` / `distanceForMinWeight`）。

它承担的是**「campaign 侧气候插值的输入」**这一环——注意方向：它**是被插值的源**，不是插值结果。`AtmosphereGrid.GetInterpolatedStateInfo` 读一整组 `AtmosphereState`，按距离算权重、加权平均，产出**另一个 `AtmosphereState`**，再由 `DefaultMapWeatherModel` 转成 [AreaInformation](../AreaInformation) 填进 [AtmosphereInfo](../AtmosphereInfo)。所以本类型是这条链的**第一环**。

## 心智模型

把它当成**「钉在地图上的一个气候采样柱」**，而不是「当前天气」。它是一个普通类（不是结构体），全部字段都是 `public` 可变字段，**没有 getter/setter、没有属性、没有生命周期钩子**——36 行、9 个字段、2 个构造器。

**心智模型的核心是「两个方差 + 两个距离权重构成的加权插值」**。这是 `AtmosphereGrid.GetInterpolatedStateInfo`（`AtmosphereGrid.cs:24-70`）的完整算法：

1. 把所有采样点连同原始下标装进一个列表；
2. **`pos.z *= 0.3f;`** ——**高度被压扁到 30%**，所以这张网格对垂直方向几乎不敏感，高海拔和低海拔算出同一个气候；
3. 按 `Position.Distance(pos)` 升序排序（**每帧每查询都排一次，O(n log n)**）；
4. 逐个算权重 `num3 = 1f - MBMath.SmoothStep(distanceForMaxWeight, distanceForMinWeight, distance)`；
5. **权重 `< 0.001` 的直接跳过**——这就是 `distanceForMinWeight` 的实际作用：一个「够不着」的采样点不参与；
6. 加权累加四个数值，并记下**第一个被采纳的采样点的 `ColorGradeTexture`**；
7. 最后**除以权重总和**做归一化。

**注意一个只有看代码才能发现的不对称**：这四个数值都做了归一化（`/= num2`），**但 `ColorGradeTexture` 不做**——它取的是「第一个权重不小于 0.001 的采样点的字符串」（`:53` 的 `if (flag) { colorGradeTexture = atmosphereState2.ColorGradeTexture; }` 加上 `flag = false`）。**所以色调是「最近的那个有效采样点的色调」，而温湿度是「所有有效采样点的加权平均」。** 这是本页最值得记住的一条。

**第二个心智锚点是那六个参数的默认值来源。** 字段声明（`:115-117`）是：

```csharp
public float distanceForMaxWeight = 1f;
public float distanceForMinWeight = 1f;
public string ColorGradeTexture = "";
```

**而六参数构造器（`:127-133`）只写前四个数值与贴图名，从不碰这两个距离权重。** 所以**任何用构造器造出来的 `AtmosphereState`，两个距离权重都是 1f**。而权重公式是 `1f - SmoothStep(distanceForMaxWeight, distanceForMinWeight, distance)`——当两者都是 1f 时，`SmoothStep` 在 `[1,1]` 上退化为常数，**于是这个采样点要么对所有距离都有固定权重、要么对所有距离都为零**。这就是为什么 `Campaign.Current.DefaultWeatherNodeDimension`（决定节点间距的配置项）与这两个字段的默认值必须匹配。

**第三个锚点是命名。** `distanceForMaxWeight` / `distanceForMinWeight` 是**唯二的小写开头的公开字段**，违反了 C# 的命名约定——这不是笔误，源码就是这样。改这两个字段名会破坏外部代码。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Position` | `public Vec3 Position = Vec3.Zero;` | 采样点的地图坐标。**插值时 `pos.z` 被乘 0.3**（`AtmosphereGrid.cs:33`），所以高度只占 30% 权重。`Vec3.Zero` 而非 `null`，所以裸构造的对象位置在原点而不是空。 |
| `TemperatureAverage` / `TemperatureVariance` | `public float TemperatureAverage;` / `public float TemperatureVariance;` | 该点的温度均值与**季节摆动幅度**。消费方 `DefaultMapWeatherModel.GetTemperature`（`:643-652`）算出 `average + variance * ((seasonFactor - 0.5f) * -2f)`。**方差在这里是「季节振幅」而不是统计方差。** |
| `HumidityAverage` / `HumidityVariance` | `public float HumidityAverage;` / `public float HumidityVariance;` | 湿度均值与振幅。`GetHumidity`（`:655-664`）的公式是 `average + variance * ((seasonFactor - 0.5f) * 2f)`——**季节因子符号与温度相反**，且**结果被 `MBMath.ClampFloat(..., 0f, 100f)` 钳制**，而温度没有。 |
| `distanceForMaxWeight` | `public float distanceForMaxWeight = 1f;` | 「权重达到最大」的距离阈值，权重公式 `1f - SmoothStep(max, min, distance)` 的第一个参数。**小写开头，违反命名约定**；**六参数构造器不写它，保持 1f。** |
| `distanceForMinWeight` | `public float distanceForMinWeight = 1f;` | 「权重降到最小」的距离阈值。`AtmosphereGrid.cs:50` 用它筛掉 `< 0.001` 的采样点。**同样小写开头，同样不被构造器设置。** |
| `ColorGradeTexture` | `public string ColorGradeTexture = "";` | 色调贴图名，默认空串。**插值时不参与加权平均**——`AtmosphereGrid` 取「第一个有效采样点的值」，`flag` 标志保证只取一次。另外 `AtmosphereGrid.cs:53` 有 `string colorGradeTexture = (atmosphereState.ColorGradeTexture = "color_grade_empire_harsh");` 这句——**空网格时的兜底是硬编码的帝国风格**。 |
| `AtmosphereState()` | `public AtmosphereState() { }` | 无参构造器，**函数体完全为空**（`:123-127`）。五个 float 是 0、`Position` 是 `Vec3.Zero`、两个距离权重是 1f、`ColorGradeTexture` 是 `""`。**`AtmosphereGrid.cs:38/49` 正是用它来当插值累加器。** |
| `AtmosphereState(Vec3, float, float, float, float, string)` | `public AtmosphereState(Vec3 position, float tempAv, float tempVar, float humAv, float humVar, string colorGradeTexture)` | 六参数构造器。**只写这六个，`distanceForMaxWeight` 与 `distanceForMinWeight` 保持字段初始值 1f。** 这是全树唯一的构造调用入口（由 `Campaign.Current.MapSceneWrapper.GetAtmosphereStates()` 返回的实例使用）。 |

## 真实示例

插值出一份 `AtmosphereState`——**这是本类型唯一的真实消费方式**（结构照 `AtmosphereGrid.cs:24-70`）：

```csharp
public static class MyAtmosphereSampler
{
    // Reproduces the weighting in AtmosphereGrid.GetInterpolatedStateInfo:
    // height is flattened to 30%, weights come from SmoothStep, and anything
    // below 0.001 is dropped.
    public static AtmosphereState SampleAt(List<AtmosphereState> grid, Vec3 position)
    {
        AtmosphereState result = new AtmosphereState();
        result.ColorGradeTexture = "color_grade_empire_harsh";

        position.z *= 0.3f;
        float totalWeight = 0f;
        bool tookFirstTexture = false;

        foreach (AtmosphereState state in grid)
        {
            float distance = state.Position.Distance(position);
            float weight = 1f - MBMath.SmoothStep(
                state.distanceForMaxWeight, state.distanceForMinWeight, distance);

            if (weight < 0.001f)
            {
                continue;
            }

            // The texture is NOT averaged -- it is taken from the first
            // contributing sample and then left alone.
            if (!tookFirstTexture)
            {
                result.ColorGradeTexture = state.ColorGradeTexture;
                tookFirstTexture = true;
            }

            result.TemperatureAverage += state.TemperatureAverage * weight;
            result.HumidityAverage += state.HumidityAverage * weight;
            totalWeight += weight;
        }

        if (totalWeight > 0f)
        {
            result.TemperatureAverage /= totalWeight;
            result.HumidityAverage /= totalWeight;
        }

        return result;
    }
}
```

构造时看清「距离权重不被六参数构造器设置」这件事：

```csharp
public static void ExplainDefaults()
{
    AtmosphereState built = new AtmosphereState(
        Vec3.Zero, 18f, 12f, 40f, 25f, "color_grade_battania");

    // These two are 1f because the six-arg constructor never writes them.
    Debug.Print("maxWeight = " + built.distanceForMaxWeight, 0);
    Debug.Print("minWeight = " + built.distanceForMinWeight, 0);

    // With max == min == 1f, SmoothStep degenerates: the weight is either a
    // constant or zero, never a gradient. This is why the node dimension
    // Campaign.Current.DefaultWeatherNodeDimension has to line up with them.
    float constantWeight = 1f - MBMath.SmoothStep(1f, 1f, 0.5f);
    Debug.Print("weight at 0.5 with max==min==1 : " + constantWeight, 0);

    // The parameterless constructor is what AtmosphereGrid uses as an accumulator.
    AtmosphereState blank = new AtmosphereState();
    Debug.Print("blank texture = '" + blank.ColorGradeTexture + "'", 0);
}
```

## 风险与边界

- **它是插值的源，不是结果。** `AtmosphereGrid` 读一组它、加权产出另一个它。**拿到一个 `AtmosphereState` 并不意味着它是「当前天气」**，它只是一个网格采样点。
- **色调不参与加权平均。** `AtmosphereGrid` 取第一个权重 ≥ 0.001 的采样点的 `ColorGradeTexture`，而四个数值都做了归一化。**「最近采样点的色调」与「加权平均的温度」是两套完全不同的选取规则。**
- **六个参数构造器不设置两个距离权重。** 它们保持字段初始值 1f。当 `max == min` 时 `SmoothStep` 退化为常数。**这是最容易在自定义天气节点上踩的一条。**
- **`pos.z *= 0.3f` 是硬编码的。** `AtmosphereGrid.cs:33`。**这张气候网格对高度几乎不敏感**，高海拔与低海拔算出同一个气候，且没有任何配置项能改。
- **每次查询都重新排序。** `GetInterpolatedStateInfo` 每次调用都 `list.Sort(...)`（`:34`）。**每帧每查询 O(n log n)**，而 `DefaultMapWeatherModel.GetAtmosphereModel` 每次开任务菜单都会调它。**不要在 tick 里高频调用。**
- **字段全部公开可变。** 没有 getter/setter、没有属性、没有任何不变性保证。**外部可以任意改 `Position` 或权重，插值结果随之改变且无断言拦截。**
- **两个字段小写开头。** `distanceForMaxWeight` / `distanceForMinWeight` 违反命名约定但**确实是 public 字段**。**改名会破坏外部代码。**
- **兜底色调是硬编码的。** 空网格时 `AtmosphereGrid.cs:53` 把它设成 `"color_grade_empire_harsh"`——**帝国风格，不是玩家所在文化的风格。** 读档后若网格加载失败会得到这个值。
- **`ColorGradeTexture` 默认空串而非 null。** 但**无参构造器不写它**（靠字段初始值），所以是 `""`。**用 `== null` 判断会失效。**
- **它不参与序列化。** 全树没有任何 `SaveableTypeDefiner` 注册，也没有任何 `AutoGenerated*` 回调。**改它不会影响存档，但读档后 `Campaign.Current.MapSceneWrapper.GetAtmosphereStates()` 会重新提供它们。**
- **它不是 [AtmosphereInfo](../AtmosphereInfo) 也不是 [AreaInformation](../AreaInformation)。** 三者名字相近、字段名也相近（`TemperatureAverage` vs `Temperature`），但**「网格采样点」「插值后的读数」「打包给引擎的单据」是三个完全不同的东西**。

## 怎么用

### 怎么拿到它

`public class AtmosphereState`（`TaleWorlds.Core/AtmosphereState.cs:5`），只有字段 + 两个构造器。它的实例来自 `Campaign.Current.MapSceneWrapper.GetAtmosphereStates()`——那是全树唯一的构造调用入口，返回一组网格采样点。**拿到它不意味着它是「当前天气」**：它是插值的源。

### 典型用法

上面「真实示例」第一段是加权插值（复刻 `AtmosphereGrid`），第二段是构造默认值。两种取值方式里还有第三条，官方自己也用：**不加权，直接取最近的一个**——`ColorGradeTexture` 在加权路径里本来就是这么取的（取第一个有效贡献点，然后不再参与平均）：

```csharp
public static class NearestAtmosphereSampler
{
    public static AtmosphereState NearestSample(List<AtmosphereState> grid, Vec3 position)
    {
        if (grid == null || grid.Count == 0)
        {
            return new AtmosphereState();   // 空网格：兜底就是硬编码的帝国风格
        }
        // 与加权路径同一套高度压扁：AtmosphereGrid.cs:33 把 pos.z 乘 0.3
        Vec3 probe = position;
        probe.z *= 0.3f;

        int bestIndex = 0;
        float bestDistance = float.MaxValue;
        for (int i = 0; i < grid.Count; i++)
        {
            float distance = grid[i].Position.Distance(probe);
            if (distance < bestDistance)
            {
                bestDistance = distance;
                bestIndex = i;
            }
        }
        return grid[bestIndex];
    }
}
```

与上面「真实示例」的差别：那里是**加权平均**（每格按 SmoothStep 权重累加、最后除以总权重），得到一个谁也不像的合成值；这里直接返回网格里**离查询点最近的那一个原始采样点**——温度、湿度、贴图名全部原样透传，所以色调贴图能和数值对得上，而不是像加权路径那样数值被平均、贴图只取第一个。

### 最容易踩的坑

**它是插值的源，不是结果。** `AtmosphereGrid` 读一组它、加权产出另一个它。拿到一个 `AtmosphereState` 并不意味着它是「当前天气」。

## 跨版本提示

`AtmosphereState.cs` 在 1.4.5 是 36 行、9 个字段 + 2 个构造器，是原始源码形态（`public class` 而非结构体）。**跨版本真正要核对的是三处**：**类还是结构体吗**——如果某个版本把它改成 `struct`，那么「插值累加器」那段代码（`AtmosphereGrid.cs:38/49` 每次 `new AtmosphereState()` 再逐字段累加）的性能特征会显著变化，`AtmosphereGrid` 里的 `ref` 传参风格也会跟着变；**两个距离权重的默认值**（它们与 `Campaign.DefaultWeatherNodeDimension` 的耦合关系是隐式的）；以及 `pos.z *= 0.3f` 这个硬编码系数。**注意 v1.4.x 后期版本把整个天气网格搬到了 `Campaign.DefaultWeatherNodeDimension` 驱动的新节点系统上，采样点数量与间距算法都变了**——所以「这张网格有多密」这个问题的答案跨版本不可迁移。

## 依赖关系

- 唯一消费方：`TaleWorlds.CampaignSystem/AtmosphereGrid.cs` 的 `GetInterpolatedStateInfo(Vec3)`（`:24`），它读全表、插值、产出一个新的 `AtmosphereState`
- 数据来源：`Campaign.Current.MapSceneWrapper.GetAtmosphereStates()`（`AtmosphereGrid.cs:20`），返回的是用六参数构造器造好的一组实例
- 抽象接口：[MapWeatherModel](../../campaign/MapWeatherModel) 的 `abstract AtmosphereState GetInterpolatedAtmosphereState(CampaignTime, Vec3)`
- 具体实现：`TaleWorlds.CampaignSystem.GameComponents/DefaultMapWeatherModel.cs:87-94`，它缓存 `AtmosphereGrid` 并转发调用
- 下游转换：`DefaultMapWeatherModel.cs:124-125` 用插值结果调 `GetTemperature` / `GetHumidity`，产出 [AreaInformation](../AreaInformation) 的两个字段
- 网格尺寸配置：`Campaign.DefaultWeatherNodeDimension`，与两个 `distanceForXxxWeight` 的默认值隐式耦合
- 插值数学：`MBMath.SmoothStep` 与 `Vec3.Distance`
- 桶首页：[core-extra API 分区](../)