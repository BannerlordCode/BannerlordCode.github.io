---
title: "AreaInformation"
description: "区域气候参数结构体，只有温度与湿度两个 float。它是 DefineAsEngineStruct 绑定的 native 引擎结构，唯一使用位置是 AtmosphereInfo.AreaInfo。两个数值其实源自 AtmosphereState 的网格插值，不是直接测量值。"
---

# AreaInformation

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct AreaInformation`
**Base:** 无
**File:** `TaleWorlds.Library/AreaInformation.cs`

## 概述

`AreaInformation` 是大气参数里的**区域气候那一小块**：两个 float，一个温度、一个湿度。20 行代码、2 个字段、2 个方法，是本桶最小的结构体之一。它作为 [AtmosphereInfo](../AtmosphereInfo) 的 `AreaInfo` 成员被携带，在 `TaleWorlds.Engine/Properties/AssemblyInfo.cs:18` 被 `[assembly: DefineAsEngineStruct(typeof(AreaInformation), "area_information", false, null, null)]` 绑到 native。

它承担的是**「把某个地图位置算出来的气候值交给引擎」**这一环。和 [AmbientInformation](../AmbientInformation) 一样是**引擎侧定义、托管侧填充**的结构；区别在于它的两个数值**有明确的、可追溯的来源**——不是渲染参数，而是**由地图天气网格插值出来的气候读数**。

## 心智模型

把它当成**「某个位置此刻的体感气候读数」**，而不是「天气状态」。它无标志、无钩子、无查询方法，**是一份两字段的纯载荷**。

**心智模型的核心是「这两个数字不是量出来的，是插出来的」。** 唯一真实的生产者是 `DefaultMapWeatherModel.GetAtmosphereModel`（`TaleWorlds.CampaignSystem.GameComponents/DefaultMapWeatherModel.cs:186-190`）：

```csharp
AreaInfo =
{
    Temperature = temperature,
    Humidity = humidity
}
```

而这两个局部变量的来源在 `:124-125`：

```csharp
AtmosphereState gridInfo = GetInterpolatedAtmosphereState(CampaignTime.Now, position.AsVec3());
float temperature = GetTemperature(ref gridInfo, timeFactorForSnow);
float humidity = GetHumidity(ref gridInfo, timeFactorForSnow);
```

链条是：**[AtmosphereState](../AtmosphereState) 网格插值 → 加季节偏移 → 写入 `AreaInfo`**。`GetTemperature`（`:643-652`）是 `gridInfo.TemperatureAverage + gridInfo.TemperatureVariance * ((seasonFactor - 0.5f) * -2f)`；`GetHumidity`（`:655-664`）是同一形状但季节因子取 `(seasonFactor - 0.5f) * 2f` —— **注意正负号相反**，这是温度与湿度在一年里相位差半年的编码方式。两个函数**开头都有 `if (gridInfo == null) return 0f;` 的空引用保护**，所以网格缺失时得到的是 0 而不是异常。

由此推出三条实操结论。第一，**湿度被钳制在 0..100，温度不被钳制。** `GetHumidity` 的返回值包在 `MBMath.ClampFloat(..., 0f, 100f)` 里，而 `GetTemperature` 只有一个裸的加法。**这意味着你可以往 `AreaInformation.Humidity` 写 150，但不该往 `Temperature` 写你随手算的值——前者引擎有概念上的量纲，后者没有。** 第二，**它没有任何有效性标志。** `AreaInformation` 没有 `IsValid`（那是 [AtmosphereInfo](../AtmosphereInfo) 才有的），所以「0 度 0 湿度」既可能是真实的极地，也可能是网格缺失导致的兜底值，**托管层无法区分**。第三，**它与 [AtmosphereState](../AtmosphereState) 是完全不同的两个东西。** 前者是「算完的单个位置的读数」，后者是「网格上的一个采样点及其影响半径」。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Temperature` | `public float Temperature;` | 区域温度。**由 `GetTemperature` 产出**（`DefaultMapWeatherModel.cs:643-652`），公式是网格均值加季节偏移。**返回值没有钳制**。纯数据字段，托管侧无读取方。 |
| `Humidity` | `public float Humidity;` | 区域湿度。**由 `GetHumidity` 产出**（`:655-664`），与温度同构但季节因子取反（`(seasonFactor - 0.5f) * 2f`），**并且返回值被 `MBMath.ClampFloat(..., 0f, 100f)` 钳制**。 |
| `DeserializeFrom` | `public void DeserializeFrom(IReader reader)` | 按硬编码顺序读两个 float：`Temperature = reader.ReadFloat(); Humidity = reader.ReadFloat();`。**没有长度或类型标记**，所以这两个 float 的先后顺序就是存档格式。 |
| `SerializeTo` | `public void SerializeTo(IWriter writer)` | 对称写入：`writer.WriteFloat(Temperature); writer.WriteFloat(Humidity);`。**加字段必须同时改两个方法**，否则存档错位。 |
| （程序集特性）`DefineAsEngineStruct` | `[assembly: DefineAsEngineStruct(typeof(AreaInformation), "area_information", false, null, null)]`，`TaleWorlds.Engine/Properties/AssemblyInfo.cs:18` | 绑到 native 的 `area_information` 结构体，`false` 表示非位标志集。**这是判断「谁读这些数值」的依据**：带这行 = 引擎消费。 |
| （唯一使用位置）`AreaInfo` | `AtmosphereInfo.AreaInfo`，`AtmosphereInfo.cs:28` | 唯一落点。`AtmosphereInfo.DeserializeFrom`（`:55`）与 `SerializeTo`（`:69`）在固定位置调本类型的两个方法——**这是它唯一的托管调用方**。 |

## 真实示例

**照实说明：这是本类型唯一的真实用法**，即在一份 `AtmosphereInfo` 的对象初始化器里填两个字段。完整链条照 `DefaultMapWeatherModel.cs:124-190`：

```csharp
public class MyWeatherModel : MapWeatherModel
{
    public override AtmosphereInfo GetAtmosphereModel(CampaignVec2 position)
    {
        // 1. Interpolate the weather grid at this position (see AtmosphereState).
        AtmosphereState gridInfo = GetInterpolatedAtmosphereState(CampaignTime.Now, position.AsVec3());

        // 2. Apply the seasonal offset. Both getters null-guard and return 0f.
        float temperature = GetTemperature(ref gridInfo, timeFactorForSnow);
        float humidity = GetHumidity(ref gridInfo, timeFactorForSnow);

        return new AtmosphereInfo
        {
            Seed = (uint)CampaignTime.Now.ToSeconds,
            AtmosphereName = "TOD_12_00_SemiCloudy",
            AreaInfo =
            {
                Temperature = temperature,
                Humidity = humidity
            }
        };
    }
}
```

复刻它的存档往返，并看清「两个 float 的顺序就是格式」：

```csharp
public static class AreaRoundTrip
{
    // Humidity is the only one the game clamps, and it does so at the producer
    // (DefaultMapWeatherModel, line 663), not here.
    public const float HumidityMax = 100f;

    public static void Write(IWriter writer, AreaInformation value)
    {
        // Field order is hard-coded and IS the binary layout. Temperature first.
        writer.WriteFloat(value.Temperature);
        writer.WriteFloat(value.Humidity);
    }

    public static void Read(IReader reader, out AreaInformation value)
    {
        value.Temperature = reader.ReadFloat();
        value.Humidity = reader.ReadFloat();
    }

    public static bool IsPlausible(AreaInformation value)
    {
        // No such helper exists on the struct itself -- IsValid belongs to
        // AtmosphereInfo, and it only checks AtmosphereName.
        return value.Humidity >= 0f && value.Humidity <= HumidityMax;
    }
}
```

## 风险与边界

- **它是 native 引擎结构的镜像。** `TaleWorlds.Engine/Properties/AssemblyInfo.cs:18` 是硬证据。托管侧填、引擎读。
- **两个字段的含义不对称。** 湿度有 `0..100` 的量纲并在生产者处被钳制，温度**没有任何钳制也没有量纲定义**。**手写温度时不能参考湿度的做法**，因为温度既没有范围约束也没有下游校验。
- **0 值有二义性。** `GetTemperature` / `GetHumidity` 在网格为 null 时返回 `0f`（`:645-648`、`:657-660`），而「真实的 0 度 0 湿度」也是 0。**托管层无法区分二者**，因为本类型没有任何有效性标志。
- **字段顺序即存档格式。** `DeserializeFrom` / `SerializeTo` 是手写且**互不同步**的两个方法。加字段必须同时改两处；只改一边不会报错，只会让读档数值错位。
- **没有构造器、没有默认值、没有初始化。** `public struct` 的隐式构造让两个字段都是 0。`new AreaInformation()` 与「Deserialize 过但两个属性都是 0」在内存里**完全一样**。
- **不要与 [AtmosphereState](../AtmosphereState) 混淆。** 一个是「算完的读数」，一个是「网格采样点（含 `distanceForMaxWeight` / `distanceForMinWeight` 影响半径）」。**它们的温度/湿度字段名相似但语义不同**：`TemperatureAverage` + `TemperatureVariance` vs 一个已经算好的 `Temperature`。
- **它不参与渲染。** 与 [AmbientInformation](../AmbientInformation) 的 `MieScatterStrength` 这类真正驱动画面不同，`Temperature` / `Humidity` 在托管侧**没有任何渲染消费方**——它们的去向是 native。
- **改本地副本没有效果。** 和 `AmbientInformation` 一样，这些值只通过 `MissionInitializerRecord.AtmosphereOnCampaign` 在任务初始化时交进去。
- **托管侧零读取方。** 除 `AtmosphereInfo.cs:28` 的字段声明外，全树无处读这两个 float。**验证是否填对只能看引擎表现。**
- **`SerializeTo` / `DeserializeFrom` 由 `AtmosphereInfo` 连带调用。** 不要试图单独调它们做存档。

## 跨版本提示

`AreaInformation.cs` 在 1.4.5 是 20 行、2 字段 + 2 方法，是原始源码形态。1.3.x / 1.4.6 的对应文件是反编译产物。**跨版本真正要核对的是三处**：native 绑定名 `"area_information"`（`TaleWorlds.Engine/Properties/AssemblyInfo.cs:18`）；`DeserializeFrom` / `SerializeTo` 里**两个 float 的先后顺序**（变了旧存档就错位，且托管层不报错）；以及 `DefaultMapWeatherModel` 里 `GetTemperature` 与 `GetHumidity` 的季节因子正负号关系——**这两个符号是「夏热冬冷」与「夏干冬湿」得以同时成立的关键，改一个而不改另一个会让气候完全反相**。另外 1.4.5 之后的版本在大气体系里引入了并行结构体，若目标版本换了 `AtmosphereInfo`，本类型很可能也跟着换形状。

## 依赖关系

- 唯一托管使用方：[AtmosphereInfo](../AtmosphereInfo) 的 `AreaInfo` 字段（`AtmosphereInfo.cs:28`），由其 `DeserializeFrom`（`:55`）与 `SerializeTo`（`:69`）在固定位置调用
- native 绑定：`TaleWorlds.Engine/Properties/AssemblyInfo.cs:18` 的 `DefineAsEngineStruct(..., "area_information", ...)`
- 数值生产者：`TaleWorlds.CampaignSystem.GameComponents/DefaultMapWeatherModel.cs:186-190`，全树唯一的真实构造点
- 上游数据：[AtmosphereState](../AtmosphereState) 的 `TemperatureAverage` / `TemperatureVariance` / `HumidityAverage` / `HumidityVariance`，由 `AtmosphereGrid.GetInterpolatedStateInfo` 插值得到
- 天气模型抽象：[MapWeatherModel](../../campaign/MapWeatherModel) 的 `GetAtmosphereModel(CampaignVec2)` 与 `GetInterpolatedAtmosphereState(...)`
- 序列化接口：`TaleWorlds.Library` 的 `IReader.ReadFloat()` 与 `IWriter.WriteFloat()`
- 钳制工具：`MBMath.ClampFloat`，见 `DefaultMapWeatherModel`, line 663
- 同族结构：[AmbientInformation](../AmbientInformation)、`FogInformation`、`SkyInformation` 等并列在 `AtmosphereInfo` 里
- 桶首页：[core-extra API 分区](../)