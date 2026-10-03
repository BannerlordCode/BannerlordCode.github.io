---
title: "AreaInformation"
description: "区域温湿度参数块：两个 public float 加一对 IReader/IWriter 直读写，只被 AtmosphereInfo.AreaInfo 持有，并以 area_information 的名字标记成原生引擎结构。"
---

# AreaInformation

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct AreaInformation`
**Base:** 无（隐式 `System.ValueType`；不实现接口，也不继承任何 `MBObjectBase`）
**File:** `TaleWorlds.Library/AreaInformation.cs`（28 行 / 668 字节，源码树内**没有任何其它 .cs 引用它**）

## 概述

`AreaInformation` 是天气系统里描述「当前区域的温湿度」的两个数字：`Temperature` 与 `Humidity`，都是 `float`。它比同族的 [AmbientInformation](../AmbientInformation) 更小——只有两个标量字段，没有颜色向量，因此整个类型只占 28 行。

它在 1.3.0 全树里出现三处：自己、`TaleWorlds.Library/AtmosphereInfo.cs` 第 87 行的 `public AreaInformation AreaInfo;`，以及 `TaleWorlds.Engine/Properties/AssemblyInfo.cs` 第 20 行的
`[assembly: DefineAsEngineStruct(typeof(AreaInformation), "area_information", false, null, null)]`。
和 [AmbientInformation](../AmbientInformation) 一样，它在托管侧没有任何逻辑，只是一块等着被原生层填满的内存。

## 心智模型

把它当成**原生结构的两字段手写镜像**就对了，第二条程序集级特性就是全部证据。这里最有价值的一点是把它和同族的其它天气块放在一起看：`[SunInformation](../SunInformation)`、`[RainInformation](../RainInformation)`、`[SnowInformation](../SnowInformation)`、`[AmbientInformation](../AmbientInformation)`、`[FogInformation](../FogInformation)`、`[SkyInformation](../SkyInformation)`、`[NauticalInformation](../NauticalInformation)`、`[TimeInformation](../TimeInformation)`、`[AreaInformation](../AreaInformation)`、`[PostProcessInformation](../PostProcessInformation)` 十块**共用同一套约定**：

- 都是 `public struct`，字段全 `public`，没有属性也没有构造函数；
- 都实现同一对方法 `DeserializeFrom(IReader)` / `SerializeTo(IWriter)`；
- 都在 `TaleWorlds.Engine/Properties/AssemblyInfo.cs` 里有一条 `DefineAsEngineStruct` 把它映射成一个 snake_case 的 native 名字；
- 都**只被** [AtmosphereInfo](../AtmosphereInfo) 的同名字段持有。

[AtmosphereInfo](../AtmosphereInfo).`DeserializeFrom` 的读序把这条约定钉死了：`SunInfo` → `RainInfo` → `SnowInfo` → `AmbientInfo` → `FogInfo` → `SkyInfo` → `NauticalInfo` → `TimeInfo` → **`AreaInfo`** → `PostProInfo`。`AreaInformation` 排在第九位，`SerializeTo` 用完全相同的顺序写回去。**所以「改字段顺序」在这十个类型里都是 ABI 级破坏**，不是代码风格问题。

第四条，也是这类 struct 的通病：**传参是值拷贝**。`WriteArea(IWriter writer, AreaInformation area)` 里改 `area.Temperature` 改的是副本。`AtmosphereInfo` 自己也是 struct，所以内嵌的 `AreaInfo` 也是内嵌副本——两层都是值语义。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Temperature` | `public float Temperature;` | 区域温度。原生写序第 1 个。没有单位声明、没有 clamp，写成 300 也照样读得进去。 |
| `Humidity` | `public float Humidity;` | 区域湿度，原生写序第 2 个。同样没有任何取值范围约束，取值语义（0–1 还是百分数）只存在于渲染端约定里。 |
| `DeserializeFrom` | `public void DeserializeFrom(IReader reader)` | 固定按 `Temperature` → `Humidity` 读两个 [IReader](../IReader) 的 `ReadFloat`。只被 [AtmosphereInfo](../AtmosphereInfo).`DeserializeFrom` 调用。 |
| `SerializeTo` | `public void SerializeTo(IWriter writer)` | 严格镜像的写序，两个 `WriteFloat`。与 `DeserializeFrom` 任何一侧单独改动都会造成静默错位。 |

## 真实示例

按官方路径读出整块大气参数并取温湿度（`AreaInfo` 在 `AtmosphereInfo` 里排第九位）：

```csharp
AtmosphereInfo atmosphere = new AtmosphereInfo();
atmosphere.DeserializeFrom(reader);
Debug.Print("temperature = " + atmosphere.AreaInfo.Temperature, 0);
Debug.Print("humidity    = " + atmosphere.AreaInfo.Humidity, 0);
```

按季节给一片区域做温度偏移（`AtmosphereInfo` 是 struct，改完必须作用在宿主变量上）：

```csharp
public static void ShiftTemperature(AtmosphereInfo atmosphere, float delta)
{
    atmosphere.AreaInfo.Temperature += delta;
    atmosphere.AreaInfo.Humidity = Math.Min(1f, atmosphere.AreaInfo.Humidity + delta * 0.02f);
}
```

自己写一份等价写序，用来在 mod 侧重新打包一份大气配置：

```csharp
public static void WriteArea(IWriter writer, AreaInformation area)
{
    writer.WriteFloat(area.Temperature);
    writer.WriteFloat(area.Humidity);
}
```

## 风险与边界

- **两个 float 都不能保证是「合理值」。** 没有范围检查、没有断言。负湿度或上百的温度会一路传到渲染层。
- **顺序即 ABI。** 读序与写序、以及它在 [AtmosphereInfo](../AtmosphereInfo) 里的位置，三者一起构成与原生层的契约，改动任何一处都不报错。
- **struct 值拷贝。** 传进方法再改等于没改；`AtmosphereInfo.AreaInfo` 本身也是内嵌副本，必须写回宿主。
- **不参与存档。** `IReader` / `IWriter` 是场景二进制流那条路，与 [MBSaveLoad](../MBSaveLoad) 的存档对象图无关，`[SaveableField]` 用不上。
- **不是 `MBObjectBase`。** 没有 `StringId` / `Id`，不受 `MBObjectManager` 注册管理，也没有对应的注册查询路径。
- **没有 public 扩展点。** 没有 `abstract`、没有 `virtual` 成员，加字段就得同时改原生侧，已经超出 mod 的范围。
- **单位没有写进类型。** `Temperature` 是开尔文还是摄氏度、`Humidity` 是 0–1 还是 0–100，源码里查不到，只存在于渲染端约定；跨层传值时这是最常见的错源。

## 跨版本提示

`AreaInformation.cs` 在 `bannerlord-1.3.0/`、`bannerlord-1.3.15/`、`bannerlord-1.4.6/`、`bannerlord-1.4.7/`、`bannerlord-1.5.3/` 五棵树里**逐字节一致**：都是 668 字节、28 行、2 个方法 + 2 个 `public` 字段的公开表面。跨 1.3 → 1.5 三个大版本零变化。

同族的十块天气结构在五棵树里全部零变化（见 [AmbientInformation](../AmbientInformation) 那页的对照）。**升级 Bannerlord 不会让你的温湿度相关代码编译不过，也不会改变读写的字节序**——这批类型是整个代码库里 ABI 最稳定的一批。

## 依赖关系

- 唯一持有者：[AtmosphereInfo](../AtmosphereInfo) 的 `public AreaInformation AreaInfo;` 是全树唯一一处字段引用，两个方法也只被它的 `DeserializeFrom` / `SerializeTo` 调用
- 序列化契约：[IReader](../IReader) 的 `ReadFloat` 与 [IWriter](../IWriter) 的 `WriteFloat`，各调一次，顺序固定
- 同族结构：[AmbientInformation](../AmbientInformation)、[SunInformation](../SunInformation)、[FogInformation](../FogInformation)、[SkyInformation](../SkyInformation)、[TimeInformation](../TimeInformation) 遵守同一套约定，共用同一条 `DefineAsEngineStruct` 注册机制
- 原生绑定：`TaleWorlds.Engine/Properties/AssemblyInfo.cs` 里的 `[assembly: DefineAsEngineStruct(typeof(AreaInformation), "area_information", false, null, null)]`
- 调试输出：[Debug](../Debug) 的 `Print(string, int)` 是把两个系数打到日志的常规手段
- 存档对照：[MBSaveLoad](../MBSaveLoad) 走完全不同的序列化链，本类型与它无关
- 桶首页：[core-extra API 分区](../)