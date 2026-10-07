---
title: "AmbientInformation"
description: "大气环境参数结构体：环境亮度倍率、环境色、Mie 散射强度、Rayleigh 常数。它是 DefineAsEngineStruct 绑定的 native 引擎结构，托管侧唯一能做的事就是在对象初始化器里赋值，以及被 AtmosphereInfo 带着读写存档通道。"
---

# AmbientInformation

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct AmbientInformation`
**Base:** 无
**File:** `TaleWorlds.Library/AmbientInformation.cs`

## 概述

`AmbientInformation` 是**大气散射模型里的「环境光」那一小块参数**：整体环境亮度倍率、环境的雾色、阳光散射的 Mie 强度、以及描述天空散射的 Rayleigh 常数。四个字段（一个 float、一个 Vec3、两个 float）打包在一起，成为 [AtmosphereInfo](../AtmosphereInfo) 的 `AmbientInfo` 成员。

它承担的是**「把天气与时间算出来的光照参数喂给渲染引擎」**这一环，而且**这个环几乎完全在托管侧的外面**。`TaleWorlds.Engine/Properties/AssemblyInfo.cs:13` 有 `[assembly: DefineAsEngineStruct(typeof(AmbientInformation), "ambient_information", false, null, null)]` —— 它是**引擎侧定义的原生结构体的托管镜像**，四个字段的数值由 native 写入。托管侧能做的只有两件事：在对象初始化器里赋值（`DefaultMapWeatherModel.cs:153-158` 就是这么用的），以及作为 [AtmosphereInfo](../AtmosphereInfo) 的一部分被 `SerializeTo` / `DeserializeFrom` 读走或写回。

## 心智模型

把它当成**「一段已经算好的光照配方」**，而不是一个「天气状态对象」。它没有 `IsValid` 标志，没有生命周期钩子，没有任何查询方法——**它是一份纯数值载荷**，用完即弃。

判断什么时候该碰它，问一句：**我要不要自己构造一段大气参数交给引擎？** 答案是几乎不要——官方路径是由 `MapWeatherModel` 算出整份 [AtmosphereInfo](../AtmosphereInfo) 再交给 `MissionInitializerRecord.AtmosphereOnCampaign`，最后由 native 读走。你手动拼一份 `AmbientInformation` 塞进去，**没有任何校验会告诉你数值是否落在合理区间**。

**心智模型的核心是「四个字段各自被谁算出来」。** 这是从唯一真实调用方 `DefaultMapWeatherModel.GetAtmosphereModel`（`TaleWorlds.CampaignSystem.GameComponents/DefaultMapWeatherModel.cs:153-158`）反推出来的：

```csharp
AmbientInfo =
{
    EnvironmentMultiplier = TaleWorlds.Library.MathF.Max(modifiedEnvironmentMultiplier * 0.5f, 0.001f),
    AmbientColor = GetAmbientFogColor(modifiedEnvironmentMultiplier),
    MieScatterStrength = GetMieScatterStrength(environmentMultiplier),
    RayleighConstant = GetRayleighConstant(environmentMultiplier)
}
```

注意三件事。**第一，`EnvironmentMultiplier` 有 0.001f 的下限钳制**，因为它随后要参与 `MathF.Pow(modifiedEnvironmentMultiplier, 1.5f)`（`:122`），负底数会出问题。**第二，`MieScatterStrength` 与 `RayleighConstant` 用的是未修正的 `environmentMultiplier`，而 `AmbientColor` 用的是修正后的 `modifiedEnvironmentMultiplier`** —— 同一次构造里混用了两个不同的输入源，这是最容易看漏的一处不对称。**第三，`AmbientColor` 是 `Vec3`，但另外三个是 `float`** —— 颜色通道不带 alpha。

**第二个心智锚点是它的读写顺序由 `AtmosphereInfo` 决定，不由自己决定。** `AmbientInformation` 只有 `DeserializeFrom`（`:13-19`）与 `SerializeTo`（`:21-27`）两个方法，四个字段的读写顺序是**硬编码**的：`float, Vec3, float, float`。这意味着**字段的二进制布局是存档格式的一部分**。你要给这个结构体加字段，光加成员没用——**必须同时改 `DeserializeFrom` 和 `SerializeTo` 两处**，而这两处是**手写的、不会自动同步**。加漏一边的结果是存档数据错位。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `EnvironmentMultiplier` | `public float EnvironmentMultiplier;` | 环境亮度倍率。**官方构造时被 `MathF.Max(x * 0.5f, 0.001f)` 钳制**（`DefaultMapWeatherModel.cs:154`），因为它要参与 `:122` 的 `MathF.Pow(..., 1.5f)`。手写时给 0 或负数会导致 native 侧除零或开方异常，**托管层不会拦**。 |
| `AmbientColor` | `public Vec3 AmbientColor;` | 环境雾色。**它是唯一用「修正后」亮度作输入的字段**（`:155` 传 `modifiedEnvironmentMultiplier`），而下面两个用的是未修正的 `environmentMultiplier`。`Vec3` 无 alpha 通道。 |
| `MieScatterStrength` | `public float MieScatterStrength;` | Mie 散射强度，控制太阳周围的光晕。由 `GetMieScatterStrength(environmentMultiplier)` 产出（`:156`），**输入是未修正的亮度**。纯渲染参数，托管侧无读取方。 |
| `RayleighConstant` | `public float RayleighConstant;` | Rayleigh 散射常数，描述天空散射的波长依赖。由 `GetRayleighConstant(environmentMultiplier)` 产出（`:157`），同样用未修正亮度。纯渲染参数，托管侧无读取方。 |
| `DeserializeFrom` | `public void DeserializeFrom(IReader reader)` | 按**硬编码顺序**读四个字段：`reader.ReadFloat()` → `EnvironmentMultiplier`，`reader.ReadVec3()` → `AmbientColor`，`reader.ReadFloat()` → `MieScatterStrength`，`reader.ReadFloat()` → `RayleighConstant`。**它不读任何长度或类型标记**，所以二进制布局完全由这个方法决定。 |
| `SerializeTo` | `public void SerializeTo(IWriter writer)` | 与 `DeserializeFrom` 严格对称的写出版本：`WriteFloat` / `WriteVec3` / `WriteFloat` / `WriteFloat`。**加字段时必须同时改两个方法**，否则存档错位。 |
| （程序集特性）`DefineAsEngineStruct` | `[assembly: DefineAsEngineStruct(typeof(AmbientInformation), "ambient_information", false, null, null)]`，`TaleWorlds.Engine/Properties/AssemblyInfo.cs:13` | 把它绑到 native 的 `ambient_information` 结构体，`false` 表示非位标志集，无调试缩写。**这是判断「数值是谁写的」的最快依据**：带这行 = 数值由引擎填充。 |
| （唯一使用位置）`AmbientInfo` | `AtmosphereInfo.AmbientInfo`，`AtmosphereInfo.cs:18` | 它在大气结构体里的唯一落点。`AtmosphereInfo.DeserializeFrom` / `SerializeTo`（`:177-203`）在固定位置调本类型的两个方法，**这是它唯一的托管调用方**。 |

## 真实示例

**照实说明：这一段是本类型唯一的真实用法**，也就是「在一份 `AtmosphereInfo` 里用对象初始化器填这四个字段」。写法照 `DefaultMapWeatherModel.cs:153-158`，注意那三个 `GetXxx(...)` 是该类的 **private** 方法（`:471`、`:476`、`:481`），所以下面这个方法必须写在 `MapWeatherModel` 的子类里：

```csharp
public class MyWeatherModel : MapWeatherModel
{
    public override AtmosphereInfo GetAtmosphereModel(CampaignVec2 position)
    {
        return BuildAtmosphere();
    }
}

private AtmosphereInfo BuildAtmosphere()
{
    float environmentMultiplier = GetEnvironmentMultiplier(sunPosition);
float modified = MathF.Max(MathF.Pow(environmentMultiplier, 1.5f), 0.001f);

AtmosphereInfo atmosphere = new AtmosphereInfo
{
    Seed = (uint)CampaignTime.Now.ToSeconds,
    AtmosphereName = "TOD_12_00_SemiCloudy",
    AmbientInfo =
    {
        // Keep the same clamp the game uses: EnvironmentMultiplier later goes
        // through MathF.Pow(..., 1.5f), so a zero or negative base breaks it.
        EnvironmentMultiplier = MathF.Max(modified * 0.5f, 0.001f),
        AmbientColor = new Vec3(0.42f, 0.44f, 0.48f),
        MieScatterStrength = GetMieScatterStrength(environmentMultiplier),
        RayleighConstant = GetRayleighConstant(environmentMultiplier)
    }
};

// IsValid is false when AtmosphereName is empty, which is how a caller tells
// "no atmosphere" from "a zeroed one".
Debug.Print("valid = " + atmosphere.IsValid, 0);
```

复刻它的存档往返——这是理解「字段顺序即格式」最直接的方式：

```csharp
public static class AmbientRoundTrip
{
    public static void Write(IWriter writer, AmbientInformation value)
    {
        // Field order is hard-coded and IS the binary layout. Changing it
        // corrupts every existing save.
        writer.WriteFloat(value.EnvironmentMultiplier);
        writer.WriteVec3(value.AmbientColor);
        writer.WriteFloat(value.MieScatterStrength);
        writer.WriteFloat(value.RayleighConstant);
    }

    public static void Read(IReader reader, out AmbientInformation value)
    {
        value.EnvironmentMultiplier = reader.ReadFloat();
        value.AmbientColor = reader.ReadVec3();
        value.MieScatterStrength = reader.ReadFloat();
        value.RayleighConstant = reader.ReadFloat();
    }
}
```

## 风险与边界

- **它是 native 引擎结构的镜像。** `TaleWorlds.Engine/Properties/AssemblyInfo.cs:13` 的 `DefineAsEngineStruct` 是硬证据。**托管侧只负责填，数值由引擎消费**，你在托管层改字段只是改了一份要交给 native 的输入。
- **没有任何有效性检查。** 没有 `IsValid`（那是 [AtmosphereInfo](../AtmosphereInfo) 才有的）、没有断言、没有范围钳制。**你把 `EnvironmentMultiplier` 写成 0 或负数，托管层不会拦**，而 native 侧要用它做 `MathF.Pow(x, 1.5f)` 与后续乘法。
- **同一个构造里混用了两个亮度来源。** `AmbientColor` 用 `modifiedEnvironmentMultiplier`，`MieScatterStrength` 与 `RayleighConstant` 用 `environmentMultiplier`（`DefaultMapWeatherModel.cs:155-157`）。抄这段代码时若统一成一个变量，渲染结果会与原版不同。
- **`AmbientColor` 是 `Vec3` 不是带 alpha 的颜色。** 四个字段里唯一的非标量。
- **字段顺序即存档格式。** `DeserializeFrom` / `SerializeTo` 是手写且**不对称同步**的。加字段时必须同时改两个方法；只改一边 = 存档数据错位，而且**读档时不报错，只是数值乱掉**。
- **没有任何构造器。** 它是 `public struct` 且无参构造，四个字段默认全 0。`new AmbientInformation()` 得到的是「全零环境」，**不是「无环境」**——后者要用 `AtmosphereInfo.GetInvalidAtmosphereInfo()`（它产出的是 `AtmosphereName = ""`）。
- **托管侧零读取方。** 全树除 `AtmosphereInfo.cs:18` 的字段声明外，没有任何一处读这四个字段。**想验证自己填的值对不对，只能靠 native 的渲染结果。**
- **不要在 mission 运行时改已经生效的值。** 这些字段是通过 `MissionInitializerRecord.AtmosphereOnCampaign` 在任务初始化时交进去的（`MenuHelper.cs:350/385` 在开任务菜单时设置），运行中改本地副本不会有任何效果。
- **`SerializeTo` / `DeserializeFrom` 会被 `AtmosphereInfo` 连带调用。** 你不需要（也无法）单独调用它们来做存档；存档路径固定是 `AtmosphereInfo.SerializeTo` → `AmbientInfo.SerializeTo`。

## 怎么用

### 怎么拿到它

`public struct AmbientInformation`（`TaleWorlds.Library/AmbientInformation.cs:3`），四个 public 可写字段 + 一对序列化方法。它带 `[assembly: DefineAsEngineStruct(typeof(AmbientInformation), "ambient_information", false, null, null)]`（`TaleWorlds.Engine/Properties/AssemblyInfo.cs:13`）——**这是判断「数值由谁填」的最快依据**：带这行就意味着托管侧只负责填、消费在 native 侧。

### 典型用法

上面「真实示例」两段是「照官方形状填四个字段」和「复刻存档往返」。缺的是**填之前的钳制**——官方构造走的是 `MathF.Max(x * 0.5f, 0.001f)`（`DefaultMapWeatherModel.cs:154`），因为它随后要参与 `MathF.Pow(..., 1.5f)`，而托管层**不会拦**你给它 0 或负数：

```csharp
public static class AmbientSanitizer
{
    public static AmbientInformation Sanitize(float environmentMultiplier, Vec3 ambientColor)
    {
        AmbientInformation info = new AmbientInformation();
        // 与官方 DefaultMapWeatherModel 同一条钳制：先减半再兜底 0.001f
        info.EnvironmentMultiplier = MathF.Max(environmentMultiplier * 0.5f, 0.001f);
        info.AmbientColor = ambientColor;
        // 这两个由 GetMieScatterStrength / GetRayleighConstant 产出，输入是未修正亮度
        info.MieScatterStrength = 0f;
        info.RayleighConstant = 0f;
        return info;
    }
}
```

与上面「真实示例」的差别：那里假设输入已经是合法值，只演示**怎么填**和**怎么编解码**；这里多了一层**在填之前把输入变成合法值**——具体说，就是复制官方那条 `MathF.Max(x * 0.5f, 0.001f)`，因为这个结构体的所有有效性判断都在 native 侧，越界的唯一症状就是渲染异常而没有任何托管侧异常。

### 最容易踩的坑

**它是 native 引擎结构的镜像。** `TaleWorlds.Engine/Properties/AssemblyInfo.cs:13` 的 `DefineAsEngineStruct` 是硬证据。**托管侧只负责填，数值由引擎消费**，你在托管层改字段只是改了一份要交给 native 的输入。

## 跨版本提示

`AmbientInformation.cs` 在 1.4.5 是 28 行、4 个字段 + 2 个方法，是原始源码形态。1.3.x / 1.4.6 的对应文件是反编译产物。**跨版本真正要核对的是 native 契约**：程序集特性里绑定的名字 `"ambient_information"`（`TaleWorlds.Engine/Properties/AssemblyInfo.cs:13`）以及 `DeserializeFrom` / `SerializeTo` 的**四个字段顺序**。这两者任一变化都会让旧存档读出乱值，而托管层**不会有任何报错**。同时注意 1.4.5 之后的版本在大气体系里引入了 `AtmosphereInfoV2` 之类的并行结构体——**如果目标版本的 `AtmosphereInfo` 换了类型，`AmbientInformation` 很可能也需要换形状**，这是迁移时最该先确认的一点。

## 依赖关系

- 唯一托管使用方：[AtmosphereInfo](../AtmosphereInfo) 的 `AmbientInfo` 字段（`AtmosphereInfo.cs:18`），由它的 `SerializeTo` / `DeserializeFrom`（`:177-203`）连带读写
- native 绑定：`TaleWorlds.Engine/Properties/AssemblyInfo.cs:13` 的 `DefineAsEngineStruct(..., "ambient_information", ...)`
- 数值生产者：`TaleWorlds.CampaignSystem.GameComponents/DefaultMapWeatherModel.cs:153-158` 的 `GetAtmosphereModel`，是全树唯一的真实构造点
- 序列化接口：`TaleWorlds.Library` 的 `IReader.ReadFloat()` / `ReadVec3()` 与 `IWriter.WriteFloat()` / `WriteVec3()`
- 载体：[Vec3](../Vec3) 表示颜色
- 天气模型抽象：[MapWeatherModel](../../campaign/MapWeatherModel) 的 `GetAtmosphereModel(CampaignVec2)` 产出整份 `AtmosphereInfo`
- 落位：`MissionInitializerRecord.AtmosphereOnCampaign`，由 `../../campaign/MenuHelper.cs:350/385` 在打开任务菜单时赋值
- 同族结构：[AreaInformation](../AreaInformation)（温度与湿度）、`FogInformation`、`SkyInformation` 等十个子结构并列在 `AtmosphereInfo` 里
- 桶首页：[core-extra API 分区](../)