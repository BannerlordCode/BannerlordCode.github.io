---
title: "AmbientInformation"
description: "大气环境光参数块：四个 public 字段加一对 IReader/IWriter 直读写，只被 AtmosphereInfo.AmbientInfo 持有，并以 ambient_information 这个名字被标记成原生引擎结构。"
---

# AmbientInformation

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct AmbientInformation`
**Base:** 无（隐式 `System.ValueType`；不实现接口，也不继承任何 `MBObjectBase`）
**File:** `TaleWorlds.Library/AmbientInformation.cs`（38 行 / 1040 字节，源码树内**没有任何其它 .cs 引用它**）

## 概述

`AmbientInformation` 是天气系统里描述「环境光与大气散射」的那一小块参数，一共四个字段：`EnvironmentMultiplier`（环境光强度倍率）、`AmbientColor`（[Vec3](../Vec3) 颜色）、`MieScatterStrength`（米氏散射强度，控制太阳周围那圈光晕）、`RayleighConstant`（瑞利散射常数，控制天穹偏蓝的程度）。它是 `public struct`，没有构造函数、没有属性、没有派生类，只有两个方法和四个 `public` 字段。

它在 1.3.0 全树里的出现次数只有三处：自己、`TaleWorlds.Library/AtmosphereInfo.cs` 第 72 行的字段声明 `public AmbientInformation AmbientInfo;`，以及 `TaleWorlds.Engine/Properties/AssemblyInfo.cs` 第 15 行的
`[assembly: DefineAsEngineStruct(typeof(AmbientInformation), "ambient_information", false, null, null)]`。
所以「谁在用它的答案」很清楚：**只有 [AtmosphereInfo](../AtmosphereInfo) 一处**，而 AtmosphereInfo 自己是更大的一组天气参数（[SunInformation](../SunInformation) / [FogInformation](../FogInformation) / [SkyInformation](../SkyInformation) / [TimeInformation](../TimeInformation) …）的持有者。

## 心智模型

把它当成**原生引擎结构的手写镜像**，别的都顺。第二条 `[assembly: DefineAsEngineStruct]` 属性就是全部证据：这个 struct 通过一个程序集级特性被注册成 native 侧叫 `ambient_information` 的结构体，托管字段顺序必须和原生结构字段顺序严格一致。

由此推出三条硬约束。第一，**字段顺序是 ABI，不是排版**。`DeserializeFrom` 里的读序是 `ReadFloat` → `ReadVec3` → `ReadFloat` → `ReadFloat`，`SerializeTo` 里的写序完全镜像；两端顺序只要有一处改动，跟它配对的 native 侧结构就会整体错位，而且是静默错位（读出来的全是合法浮点数）。第二，**它是纯值传递，没有校验、没有 clamp、没有量纲注释**。`RayleighConstant` 填负数不会有任何断言，你只会看到天空变成怪颜色。第三，**它不参与存档**。`DeserializeFrom` / `SerializeTo` 走的是 `IReader` / `IWriter` 这条二进制流（游戏启动时从场景文件读大气配置），不是 [MBSaveLoad](../MBSaveLoad) 那条存档序列化链。所以改它不会让旧档失效，但会让**读档后的那一帧大气表现**变成新值。

第四条，也是最容易踩的：**字段全是 `public` 的可变字段，没有 setter 保护**。写 `atmosphere.AmbientInfo.AmbientColor = tint;` 完全合法，而且因为 `AmbientInformation` 是 struct，这句写的是 `AtmosphereInfo` 里那个内嵌副本（`AtmosphereInfo` 本身也是 struct），不是共享状态——把 `AmbientInformation` 单独取出来传给方法再改，改的是副本，必须写回宿主才生效。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `EnvironmentMultiplier` | `public float EnvironmentMultiplier;` | 环境光整体强度倍率。原生写序第 1 个，缺失时读到的就是 `IReader` 给的值，没有任何默认值兜底。 |
| `AmbientColor` | `public Vec3 AmbientColor;` | 环境光颜色，唯一一个非标量字段，对应 `ReadVec3` / `WriteVec3`。它带一个隐藏的第四分量（[Vec3](../Vec3) 构造器的 `w = -1f` 默认值），序列化时不写出。 |
| `MieScatterStrength` | `public float MieScatterStrength;` | 米氏散射强度，前向散射项，控制直视太阳时的光晕大小与浓度。 |
| `RayleighConstant` | `public float RayleighConstant;` | 瑞利散射常数，控制短波被散射的程度，即天空的蓝度。调它比调 `AmbientColor` 更能改变整体天色而不破坏物品受光。 |
| `DeserializeFrom` | `public void DeserializeFrom(IReader reader)` | 按 `EnvironmentMultiplier` → `AmbientColor` → `MieScatterStrength` → `RayleighConstant` 的固定顺序从 [IReader](../IReader) 读四个值。它只被 [AtmosphereInfo](../AtmosphereInfo).`DeserializeFrom` 调用，位置在 `SnowInfo` 之后、`FogInfo` 之前。 |
| `SerializeTo` | `public void SerializeTo(IWriter writer)` | 与 `DeserializeFrom` 严格镜像的写序。改动一处就必须同步改另一处，否则场景文件读出来的四个值会整体错位且不报错。 |

## 真实示例

按官方的方式从二进制流里取回整块大气参数（`AtmosphereInfo` 的读序是固定的，`AmbientInfo` 排在第四位）：

```csharp
AtmosphereInfo atmosphere = new AtmosphereInfo();
atmosphere.DeserializeFrom(reader);
Debug.Print("ambient multiplier = " + atmosphere.AmbientInfo.EnvironmentMultiplier, 0);
Debug.Print("ambient color = " + atmosphere.AmbientInfo.AmbientColor.X + ", " + atmosphere.AmbientInfo.AmbientColor.Y, 0);
Debug.Print("mie = " + atmosphere.AmbientInfo.MieScatterStrength + " rayleigh = " + atmosphere.AmbientInfo.RayleighConstant, 0);
```

对某个场景的大气块做暖色调处理（注意 `Vec3` 的分量是 `public float` 属性，逐个改后要写回字段）：

```csharp
public static void WarmUpAmbient(AtmosphereInfo atmosphere, float intensity)
{
    Vec3 tint = atmosphere.AmbientInfo.AmbientColor;
    tint.X = tint.X * intensity;
    tint.Y = tint.Y * intensity * 0.95f;
    tint.Z = tint.Z * intensity * 0.8f;
    atmosphere.AmbientInfo.AmbientColor = tint;
    atmosphere.AmbientInfo.MieScatterStrength = 0.35f;
}
```

自己写一份等价的写序（如果你要在 mod 侧重新打包一份大气配置，必须与 `SerializeTo` 逐字段对齐）：

```csharp
public static void WriteAmbient(IWriter writer, AmbientInformation ambient)
{
    writer.WriteFloat(ambient.EnvironmentMultiplier);
    writer.WriteVec3(ambient.AmbientColor);
    writer.WriteFloat(ambient.MieScatterStrength);
    writer.WriteFloat(ambient.RayleighConstant);
}
```

## 风险与边界

- **字段顺序即 ABI。** `DeserializeFrom` / `SerializeTo` / 原生结构三者的顺序必须一致，错位不会抛异常，只会静默产出错误的天气。
- **全部字段可写，没有校验。** 任何人都能写 `RayleighConstant = -5f`，没有 clamp、没有 `Debug.FailedAssert`，结果只是一片奇怪的颜色。
- **没有默认值。** `new AmbientInformation()` 给出的是全零，不是「中性大气」；`IReader` 若在流尾返回，四个字段就是 0。
- **struct 传参是值拷贝。** 把 `ambient.AmbientInfo` 传给方法后修改，改的是副本；不写回 `atmosphere.AmbientInfo.X = ...` 就等于没改。
- **不参与存档。** 走的是场景二进制流（`IReader` / `IWriter`），不是存档系统的对象图，所以 `[SaveableField]` 那套完全用不上。
- **不是 `MBObjectBase`。** 没有 `StringId` / `Id`，不会被 `MBObjectManager` 注册，也不能用 `GetObject<AmbientInformation>(...)` 找它。
- **`AmbientColor` 序列化的是 3 个 float。** [Vec3](../Vec3) 内部那个 `w`（默认 `-1f`）不参与 `WriteVec3`，别拿它当 alpha 用。
- **没有任何 public 扩展点。** 它不是 `abstract` 也没有 `virtual` 成员，想加字段只能自己写一份等价 struct 并同步 native 侧——那已经不叫 mod 了。

## 怎么用

**怎么拿到。** 本体在 `bannerlord-1.3.0/TaleWorlds.Library/AmbientInformation.cs:6`，`public struct`，没有工厂、没有注册表、没有 `MBObjectBase` 身份。在 1.3.0 树里它只出现三次：自己、`AtmosphereInfo.cs:72` 的字段声明，以及 `TaleWorlds.Engine/Properties/AssemblyInfo.cs:15` 把它注册成 native 结构 `ambient_information` 的程序集特性。所以「拿到一个 `AmbientInformation`」在托管侧只有一条路——**从一个已经被 `AtmosphereInfo.DeserializeFrom(IReader)` 填满的 `AtmosphereInfo` 上读它的 `AmbientInfo` 字段**，填充点在 `AtmosphereInfo.cs:34`，排在 `SunInfo` / `RainInfo` / `SnowInfo` 之后。

需要一份「还没加载」的占位块时用 `AtmosphereInfo.GetInvalidAtmosphereInfo()`（`AtmosphereInfo.cs:20`）：它只把 `AtmosphereName` 置成空串，别的字段保持默认值。

**一段可直接跑的加载—调参—回写链路**（`reader` / `writer` 由调用方传入，本类型不负责造它们）：

```csharp
AtmosphereInfo scene = new AtmosphereInfo();
scene.DeserializeFrom(reader);                          // AtmosphereInfo.cs:29，第 34 行填 AmbientInfo
if (!scene.IsValid)                                      // AtmosphereInfo.cs:11
{
    scene = AtmosphereInfo.GetInvalidAtmosphereInfo();   // AtmosphereInfo.cs:20：名字为空，其余字段全 0
}

AtmosphereInfo tuned = scene;                            // struct 整体拷贝
tuned.AmbientInfo.EnvironmentMultiplier = scene.AmbientInfo.EnvironmentMultiplier * 1.15f;
tuned.AmbientInfo.MieScatterStrength = 0.35f;

tuned.SerializeTo(writer);                               // AtmosphereInfo.cs:44：AmbientInfo 固定是第 4 位
```

`AtmosphereInfo tuned = scene;` 那行是**必需**的，不是风格问题：`AtmosphereInfo` 与 `AmbientInformation` 都是 struct，直接写 `scene.AmbientInfo.MieScatterStrength = ...` 只改到 scene 上；要跨函数传递就必须整块拷贝再写回。

**最常见的坑：`IsValid` 只看名字，不看你即将推进渲染的四个浮点数。** 它的实现就是 `!string.IsNullOrEmpty(this.AtmosphereName)`（`AtmosphereInfo.cs:11`），与 `AmbientInformation` 的字段无任何关系。于是 `GetInvalidAtmosphereInfo()` 那份在名字为空时判为无效，可一旦名字被填上、或拿到的是一份名字有效但二进制流只读到一半的块，`IsValid` 立刻转 true，而 `AmbientInfo.EnvironmentMultiplier` 可能仍是 `0f`。后果不是抛异常，而是**整个场景的环境光被乘成 0、物体只剩直接光照明**，且整条调用链上没有任何一层会提示你。判断是否真的可渲染，要自己看那四个字段，别信 `IsValid`。

## 跨版本提示

`AmbientInformation.cs` 在 `bannerlord-1.3.0/`、`bannerlord-1.3.15/`、`bannerlord-1.4.6/`、`bannerlord-1.4.7/`、`bannerlord-1.5.3/` 五棵树里**逐字节一致**：都是 1040 字节、38 行、1 个 `public` struct、2 个方法 + 4 个 `public` 字段的公开表面。跨 1.3 → 1.5 三个大版本零变化。

同族的其它天气块也都是同一形态：[AreaInformation](../AreaInformation)（28 行 / 668 字节）、[SunInformation](../SunInformation)、[FogInformation](../FogInformation)、[SkyInformation](../SkyInformation)、[TimeInformation](../TimeInformation) 在五棵树里同样零变化。这批「引擎结构镜像」是这个代码库里最稳的一类类型——**升级 Bannerlord 不会让你的天气代码编译不过**。

## 依赖关系

- 唯一持有者：[AtmosphereInfo](../AtmosphereInfo) 的 `public AmbientInformation AmbientInfo;` 是全树唯一一处字段引用，`DeserializeFrom` / `SerializeTo` 也只被它调
- 序列化契约：[IReader](../IReader) 提供 `ReadFloat` / `ReadVec3`，[IWriter](../IWriter) 提供 `WriteFloat` / `WriteVec3`
- 字段类型：[Vec3](../Vec3) 是 `AmbientColor` 的类型，唯一一个需要额外理解的成员
- 原生绑定：`TaleWorlds.Engine/Properties/AssemblyInfo.cs` 的 `[assembly: DefineAsEngineStruct(...)]`（托管源码里没有这个特性的定义，它来自引擎的代码生成程序集）
- 天气调试输出：[Debug](../Debug) 的 `Print(string, int)` 是把几个散射系数打到日志的常规手段
- 存档对照：[MBSaveLoad](../MBSaveLoad) 走的是完全不同的序列化链，本类型与它无关
- 桶首页：[core-extra API 分区](../)