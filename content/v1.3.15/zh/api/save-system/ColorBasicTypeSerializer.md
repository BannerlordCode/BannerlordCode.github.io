---
title: "ColorBasicTypeSerializer"
description: "将 Color 值结构序列化为固定 16 字节（RGBA 四个 float）的存档基础类型序列化器；当 [SaveableField] 字段类型为 Color 时，SaveManager 自动选用它把颜色原样落盘与还原。"
---

# ColorBasicTypeSerializer

**命名空间：** `TaleWorlds.SaveSystem.Definition`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `internal class ColorBasicTypeSerializer : IBasicTypeSerializer`
**源文件：** `TaleWorlds.SaveSystem/Definition/ColorBasicTypeSerializer.cs`

## 概述

`ColorBasicTypeSerializer` 是 `IBasicTypeSerializer` 的内置实现，专门负责把 `TaleWorlds.Library.Color` 这种不可变值结构写进存档字节流、再读回来。它不面向模组直接调用：当某个标记了 `[SaveableField]` / `[SaveableProperty]` 的字段类型是 `Color` 时，[SaveManager](../SaveManager) 在序列化该字段时会按 CLR 类型查到对应的 `BasicTypeDefinition`，进而调用本序列化器的 `Serialize` / `Deserialize`。载入时同样按类型路由回来，保证 RGBA 精确还原。

## 心智模型

把它想成存档系统里「颜色这种值类型」的唯一指定搬运工：你从不在代码里 `new ColorBasicTypeSerializer()`，而是声明一个 `Color` 类型的可存档字段，引擎在遍历对象图时自动把字段值交给它。它的字节布局必须与引擎的 `IWriter.WriteColor` / `IReader.ReadColor` 逐字节一致——颜色以四个 float（Red、Green、Blue、Alpha）连续存储，任何顺序或宽度的偏差都会让后续所有字段错位、整份存档损坏。

## 何时使用 / 何时不要使用

**不要使用：** 不要在模组运行期 `new ColorBasicTypeSerializer()` 或手动调用它的 `Serialize`/`Deserialize`——它只被存档管线内部使用，且依赖 [SaveManager](../SaveManager) 传入的 `IWriter`/`IReader` 上下文。

**何时需要了解它：** 当你排查「为什么某个颜色字段存进去是黑的 / 加载后变色」，或需要确认颜色是以浮点 RGBA（而非打包的 ARGB int）形式持久化时。若你要为**自定义**的值结构做同样的落盘，应自行实现 `IBasicTypeSerializer` 并通过 `SaveableTypeDefiner.DefineBasicTypes()` 配合 `AddBasicTypeDefinition` 登记，而不是试图复用本类。

## 依赖图

- 契约上游：[IBasicTypeSerializer](../IBasicTypeSerializer) 定义它必须实现的三个方法（`Serialize`、`Deserialize`、`GetSizeInBytes`）。
- 类型 schema：[BasicTypeDefinition](../BasicTypeDefinition) 持有 `Serializer` 实例（`ColorBasicTypeSerializer`），由 [SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner) 在 `DefineBasicTypes()` 中以 `AddBasicTypeDefinition(typeof(Color), 19, new ColorBasicTypeSerializer())` 登记。
- 选择器：[SaveManager](../SaveManager) 在序列化 `Color` 字段时按类型找到该定义并调用本类。
- 下游字节层：`IWriter.WriteColor` / `IReader.ReadColor` 负责真正写出四个 float；整体机制见 [存档系统架构](../../../architecture/save-system)。
- 自定义登记入口：[SaveableTypeDefiner](../SaveableTypeDefiner) 是所有类型定义器（含自定义 struct 序列化器）的基类。

## 风险

- **布局必须逐字节匹配引擎。** 颜色以 Red、Green、Blue、Alpha 四个 float（共 16 字节）顺序写出；`GetSizeInBytes()` 返回 `16`。若有人误以为它是打包的 ARGB int（4 字节）而改写 `WriteColor`/`ReadColor` 的一端，字节流会从该字段起整体错位，导致坏档。
- **浮点精度即真相。** 颜色按 float 存储，不是按 0–255 整型；反序列化得到的 `Color` 与存档前浮点一致，但不要假设它与某个整型 RGB 完全相等。
- **不要重排分量顺序。** `WriteColor` 先 Red 后 Green、Blue、Alpha；反序列化严格按此顺序 `ReadColor()`，任何重排都会让颜色分量错乱。

## 成员说明

### void Serialize(IWriter writer, object value)

显式接口实现。把 `value` 拆箱为 `Color`，调用 `writer.WriteColor(color)` 连续写出四个 float（Red、Green、Blue、Alpha），共 16 字节。

### object Deserialize(IReader reader)

显式接口实现。直接 `return reader.ReadColor()`，按写入顺序读回四个 float 并重组成 `Color` 返回（装箱为 `object`）。

### int GetSizeInBytes()

返回固定值 `16`，即四个 float 的字节宽度。本次存档中每个 `Color` 字段都占据 16 字节。

## 示例

给实体声明一个 `Color` 类型的可存档字段，存档时引擎自动路由到 `ColorBasicTypeSerializer`；你只需触发 `SaveManager.Save` 即可，无需手动处理字节：

```csharp
// 标成 Color 的 [SaveableField]，存读都由 ColorBasicTypeSerializer 完成
[SaveableField(12)]
public Color BannerColor;

// 触发一次保存：SaveManager 在遍历对象图时按字段类型选中 ColorBasicTypeSerializer
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Campaign.Current, metaData, saveName, driver);
```

若你新增了一个自定义值结构 `MyColor`，要像引擎内置那样落盘，则在自己的 `SaveableTypeDefiner` 里登记专属序列化器：

```csharp
protected internal override void DefineBasicTypes()
{
    base.DefineBasicTypes();
    AddBasicTypeDefinition(typeof(MyColor), 500, new MyColorBasicTypeSerializer());
}
```

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[IBasicTypeSerializer](../IBasicTypeSerializer) · [BasicTypeDefinition](../BasicTypeDefinition) · [SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner) · [Vec3BasicTypeSerializer](../Vec3BasicTypeSerializer) · [SaveManager](../SaveManager)
