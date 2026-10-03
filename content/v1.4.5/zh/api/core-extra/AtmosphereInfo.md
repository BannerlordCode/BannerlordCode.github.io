---
title: "AtmosphereInfo"
description: "大气参数总包结构体：13 个字段拼成一份完整的场景大气描述，由 DefineAsEngineStruct 绑到 native 的 rglAtmosphere_info。它把十个 SerializeTo/DeserializeFrom 按固定顺序串起来（字段顺序即存档格式），用 IsValid 区分「无大气」与「全零大气」，并把两个字符串标成定长 64 的非托管字段。"
---

# AtmosphereInfo

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct AtmosphereInfo`
**Base:** 无
**File:** `TaleWorlds.Library/AtmosphereInfo.cs`

## 概述

`AtmosphereInfo` 是**一整份场景大气描述的总包**。它把十个子结构拼在一起——`SunInfo`（太阳）、`RainInfo`（雨）、`SnowInfo`（雪）、`AmbientInfo`（环境光）、`FogInfo`（雾）、`SkyInformation`（天空）、`NauticalInformation`（海洋）、`TimeInformation`（时间）、`AreaInfo`（气候）、`PostProInfo`（后处理）——再加上 `Seed`、两个名称字符串，外加 `InterpolatedAtmosphereName`。它是 [MapWeatherModel](../../campaign/MapWeatherModel) 抽象方法的返回类型，也是 `MissionInitializerRecord.AtmosphereOnCampaign` 的类型。

它承担的是**「把 campaign 层的天气计算结果打包成交给渲染引擎的一份单据」**这一环。它是 `DefineAsEngineStruct` 绑定到 native 的 `rglAtmosphere_info` 的托管镜像（`TaleWorlds.Engine/Properties/AssemblyInfo.cs:9`）——**注意绑定名带 `rgl` 前缀，说明它对应的是引擎底层的大气子系统，而不只是普通托管数据。**

## 心智模型

把它当成**「一张交给渲染引擎的大气配置单」**，而不是「天气状态对象」。它无生命周期、无事件、无查询方法，**是一份可序列化的数据单据**。

**心智模型的核心是「它的三条边界」**：

**第一条边界是序列化顺序由它固定，且是手写的。** `DeserializeFrom`（`:177-189`）与 `SerializeTo`（`:191-203`）各自把十个子结构按**同一个顺序**串起来：

```
SunInfo → RainInfo → SnowInfo → AmbientInfo → FogInfo → SkyInfo
       → NauticalInfo → TimeInfo → AreaInfo → PostProInfo
```

**注意 `Seed`、`AtmosphereName` 与 `InterpolatedAtmosphereName` 三个字段不在这条链里**——它们不参与存档读写。所以**存档里保存的大气不含种子与名称**，读档后这两个字段是 `default`。同时，**这十个调用之间没有任何条件判断**：一个子结构的 `SerializeTo` 全部无条件执行。**字段顺序即存档格式，而它是两段手写代码各自维护的**——加一个子结构必须同时改两个方法。

**第二条边界是 `IsValid` 只看名称。** `:169` 是 `public bool IsValid => !string.IsNullOrEmpty(AtmosphereName);`。**所以「全零的大气」（每个 float 都是 0）是 `IsValid == true` 的**，只要 `AtmosphereName` 非空。`GetInvalidAtmosphereInfo()`（`:171-175`）产出的是 `AtmosphereName = ""` 的实例——**这是唯一一种被官方认可为「无效」的大气**。`MissionInitializerRecord.cs:87` 的 `bool isValid = AtmosphereOnCampaign.IsValid;` 就是这个判定的实际用法：无效时不序列化。

**第三条边界是那两个字符串是定长的非托管字段。** `:141` 与 `:164`：

```csharp
[MarshalAs(UnmanagedType.ByValTStr, SizeConst = 64)]
public string AtmosphereName;

[MarshalAs(UnmanagedType.ByValTStr, SizeConst = 64)]
public string InterpolatedAtmosphereName;
```

**这意味着它们在 native 侧是 64 字节的定长缓冲区，而不是指针。** 后果有两个：**超过 64 字符的名称在传给 native 时会被截断**；以及**在 .NET 侧它们仍然是不定长的托管 string**——托管与 native 对同一个字段的容量认知不一致。

**第四个心智锚点是生产者有两套，形状完全不同。** 一套是 `DefaultMapWeatherModel.GetAtmosphereModel`（填满全部字段，20 行对象初始化器）；另一套是 `BannerlordMissions.CreateAtmosphereInfoForMission`（`:83-107`），**它只填两个字段**：

```csharp
return new AtmosphereInfo
{
    AtmosphereName = value2,
    TimeInfo = new TimeInformation
    {
        Season = value
    }
};
```

其余八个子结构全是 `default`。**这说明「构造一份 `AtmosphereInfo`」的实际下限是极低的**——只填 `AtmosphereName` 就足以让 `IsValid` 为真并被引擎接受。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `AtmosphereName` | `[MarshalAs(UnmanagedType.ByValTStr, SizeConst = 64)] public string AtmosphereName;` | 大气定义名（形如 `TOD_12_00_SemiCloudy`）。**在 native 侧是 64 字节定长缓冲区，超长会被截断。** **它是 `IsValid` 的唯一判据**——其余字段全零也照样 valid。 |
| `IsValid` | `public bool IsValid => !string.IsNullOrEmpty(AtmosphereName);` | 唯一的存在性判定。**只看名称，不看任何数值。** `MissionInitializerRecord.cs:87` 用它决定是否序列化这段大气。 |
| `GetInvalidAtmosphereInfo` | `public static AtmosphereInfo GetInvalidAtmosphereInfo()` | 静态工厂，函数体只有一句 `return new AtmosphereInfo { AtmosphereName = "" };`。**这是「无大气」的唯一表示**，也是 `MissionInitializerRecord.AtmosphereOnCampaign` 的字段初始值（`MissionInitializerRecord.cs:51` 与 `:68` 各调一次）。 |
| `Seed` | `public uint Seed;` | 大气随机种子，`DefaultMapWeatherModel.cs:132` 赋 `(uint)CampaignTime.Now.ToSeconds`。**注意它不参与 `SerializeTo` / `DeserializeFrom`**，所以存档里没有它。 |
| `SunInfo` / `RainInfo` / `SnowInfo` / `AmbientInfo` / `FogInfo` / `SkyInfo` / `NauticalInfo` / `TimeInfo` / `AreaInfo` / `PostProInfo` | 十个 public 字段 | 十个子结构，**全部是值类型字段，没有一个是指针**。其中 [AmbientInformation](../AmbientInformation) 与 [AreaInformation](../AreaInformation) 在本桶有独立页面；其余八个同在 `TaleWorlds.Library`。**它们在存档里按固定顺序被依次读写。** |
| `InterpolatedAtmosphereName` | `[MarshalAs(UnmanagedType.ByValTStr, SizeConst = 64)] public string InterpolatedAtmosphereName;` | 插值后的名称（两张大气定义之间过渡时用）。**同样是 64 字节定长**。托管侧**零读取方、零写入方**——只在 native 侧有意义。 |
| `DeserializeFrom` | `public void DeserializeFrom(IReader reader)` | 按上面那条固定顺序调十个子结构的 `DeserializeFrom`，**无条件、无判断**。**不含 `Seed` 与两个名称。** |
| `SerializeTo` | `public void SerializeTo(IWriter writer)` | 与上面对称。`MissionInitializerRecord.cs:87-91` 的 `if (AtmosphereOnCampaign.IsValid)` 之外没有别的守卫。 |
| （程序集特性）`DefineAsEngineStruct` | `[assembly: DefineAsEngineStruct(typeof(AtmosphereInfo), "rglAtmosphere_info", false, null, null)]`，`TaleWorlds.Engine/Properties/AssemblyInfo.cs:9` | 绑定到 native 的 **`rglAtmosphere_info`**——**`rgl` 前缀说明这是引擎底层子系统**，不是普通的托管数据交换结构。`false` 表示非位标志集。 |

## 真实示例

照实说明：**这个类型在 1.4.5 有两套真实生产者，形状完全不同**。先看最简的那套——`BannerlordMissions.cs:98-106`，它只填两个字段：

```csharp
public static AtmosphereInfo CreateAtmosphereInfoForMission(string seasonId, int timeOfDay)
{
    // The dictionary lookups are quoted from BannerlordMissions, lines 84-97.
    Dictionary<string, int> seasons = new Dictionary<string, int>
    {
        { "spring", 0 }, { "summer", 1 }, { "fall", 2 }, { "winter", 3 }
    };
    Dictionary<int, string> times = new Dictionary<int, string>
    {
        { 6, "TOD_06_00_SemiCloudy" }, { 12, "TOD_12_00_SemiCloudy" },
        { 15, "TOD_04_00_SemiCloudy" }, { 18, "TOD_03_00_SemiCloudy" },
        { 22, "TOD_01_00_SemiCloudy" }
    };

    seasons.TryGetValue(seasonId, out int season);
    times.TryGetValue(timeOfDay, out string atmosphereName);

    // Eight of the ten sub-structs stay at default here, and IsValid is already
    // true because AtmosphereName is non-empty. That is the real minimum.
    AtmosphereInfo info = new AtmosphereInfo
    {
        AtmosphereName = atmosphereName,
        TimeInfo = new TimeInformation { Season = season }
    };

    Debug.Print("valid = " + info.IsValid, 0);
    return info;
}
```

判断「这份大气该不该写进存档」——照 `MissionInitializerRecord.cs:87-91` 的结构：

```csharp
public static void WriteAtmosphere(IWriter writer, AtmosphereInfo atmosphere)
{
    // IsValid only checks AtmosphereName. An all-zero atmosphere with a name is
    // still valid, so this is not a numeric sanity check.
    if (atmosphere.IsValid)
    {
        atmosphere.SerializeTo(writer);
    }
    else
    {
        writer.WriteBool(false);
    }
}

public static bool IsNoAtmosphere(MissionInitializerRecord record)
{
    // GetInvalidAtmosphereInfo() produces AtmosphereName == "", which is the
    // ONLY shape the game itself treats as "no atmosphere".
    return !record.AtmosphereOnCampaign.IsValid;
}
```

## 风险与边界

- **`IsValid` 只看 `AtmosphereName`。** 其余九个字段全 0 也不影响判定。**「全零大气」是合法的 valid 大气**，别用它当数值校验。
- **`GetInvalidAtmosphereInfo()` 唯一有效。** 它只设 `AtmosphereName = ""`。**任何其他方式造出的「空大气」都会是 valid 的。**
- **两个字符串在 native 侧是 64 字节定长。** `[MarshalAs(UnmanagedType.ByValTStr, SizeConst = 64)]` 意味着**超长名称传给引擎时会被截断**，而托管侧不报错。
- **`Seed` 与两个名称不参与存档。** `SerializeTo` / `DeserializeFrom` 的十条链里没有它们。**读档后 `Seed` 是 0、`AtmosphereName` 是 null**，所以读档后立刻调 `IsValid` 会返回 false。
- **序列化顺序是两份手写代码各自维护的。** `DeserializeFrom`（`:177-189`）与 `SerializeTo`（`:191-203`）**顺序必须完全一致但没有任何机制保证**。**加一个子结构只改一边 = 存档错位**，且读档时不报错。
- **十个子结构无条件序列化。** 没有任何「这个子结构不需要写」的分支。**即使八个子结构全是 `default`，它们照样被逐个写出去。**
- **`InterpolatedAtmosphereName` 托管侧零使用。** 它只对 native 有意义。**不要基于它做任何托管侧判断。**
- **它是值类型，10 个字段加起来不小。** 按值传递与按 `ref` 传递的差别在 `DefaultMapWeatherModel.cs:124` 已经体现过——那里先取 `AtmosphereState gridInfo` 再用 `ref` 传进 `GetTemperature`。**结构体很大时这是有意义的性能选择。**
- **两个生产者形状差 10 倍。** `DefaultMapWeatherModel` 填满全部字段，`BannerlordMissions` 只填 2 个。**看到别人构造的 `AtmosphereInfo` 不要假设它是「完整的」。**
- **它是 native 结构体的镜像。** `TaleWorlds.Engine/Properties/AssemblyInfo.cs:9`。托管侧填、引擎读，**托管层对数值没有任何校验**。

## 跨版本提示

`AtmosphereInfo.cs` 在 1.4.5 是 72 行、13 个字段 + 5 个成员，是原始源码形态。**跨版本真正要核对的是三处**：native 绑定名 `"rglAtmosphere_info"`（`TaleWorlds.Engine/Properties/AssemblyInfo.cs:9`）——它对应引擎底层子系统，**引擎改版时这个绑定名最可能变**；`DeserializeFrom` / `SerializeTo` 里**十个子结构的顺序**（变了旧存档就错位，且不报错）；以及两个 `MarshalAs` 的 `SizeConst = 64`（**改了就是 native ABI 变更，必须与引擎同步**）。另外注意 1.4.x 后期版本在大气体系里引入了并行的 `AtmosphereInfoV2` 结构体——**如果目标版本的 `MapWeatherModel.GetAtmosphereModel` 返回类型换了，本页的字段表与序列化顺序全部作废**，这是迁移时最先要确认的一点。

## 依赖关系

- 十个子结构：[AmbientInformation](../AmbientInformation)、[AreaInformation](../AreaInformation)（本桶各有独立页），以及同在 `TaleWorlds.Library` 的 `SunInformation` / `RainInformation` / `SnowInformation` / `FogInformation` / `SkyInformation` / `NauticalInformation` / `TimeInformation` / `PostProcessInformation`
- native 绑定：`TaleWorlds.Engine/Properties/AssemblyInfo.cs:9` 的 `DefineAsEngineStruct(..., "rglAtmosphere_info", ...)`
- 抽象产出方：[MapWeatherModel](../../campaign/MapWeatherModel) 的 `GetAtmosphereModel(CampaignVec2)` 返回本类型
- 具体实现：`TaleWorlds.CampaignSystem.GameComponents/DefaultMapWeatherModel.cs:115-190`（填满全部字段）与 `TaleWorlds.MountAndBlade/BannerlordMissions.cs:83-107`（只填 2 个）
- 落位：`MissionInitializerRecord.AtmosphereOnCampaign`（`MissionInitializerRecord.cs:51`），由 `../../campaign/MenuHelper.cs:350/385` 在打开任务菜单时赋值
- 气候数据源：[AtmosphereState](../AtmosphereState)，经 `AtmosphereGrid.GetInterpolatedStateInfo` 插值后喂进 `AreaInfo`
- 序列化接口：`TaleWorlds.Library` 的 `IReader` / `IWriter`，由十个子结构各自的 `DeserializeFrom` / `SerializeTo` 消费
- 桶首页：[core-extra API 分区](../)