---
title: "Vec2BasicTypeSerializer"
description: "将 Vec2（二维向量）值结构序列化为固定 8 字节（x、y 两个 float）的存档基础类型序列化器；当 [SaveableField] 字段类型为 Vec2 时由 SaveManager 自动选用。"
---

# Vec2BasicTypeSerializer

**命名空间：** `TaleWorlds.SaveSystem.Definition`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `internal class Vec2BasicTypeSerializer : IBasicTypeSerializer`
**源文件：** `TaleWorlds.SaveSystem/Definition/Vec2BasicTypeSerializer.cs`

## 概述

`Vec2BasicTypeSerializer` 实现了 `IBasicTypeSerializer`，专门处理 `TaleWorlds.Library.Vec2` 这种二维向量值结构。它把 `Vec2` 的 `x`、`y` 两个分量直接写成两个 float，加载时按同样顺序读回。模组侧不直接调用它：`[SaveableField]` 字段类型为 `Vec2` 时，[SaveManager](../SaveManager) 按类型自动路由到这里。

## 心智模型

把它想成存档系统里「二维坐标 / 方向」的搬运工。`Vec2` 由 x、y 两个 float 表达，序列化器通过 `IWriter.WriteVec2` 一次写出，落盘布局是 8 字节。你从不在业务代码里 `new` 它，只声明 `Vec2` 类型的可存档字段；字节顺序必须与 `IWriter`/`IReader` 完全一致，否则坐标会被静默错位。

## 何时使用 / 何时不要使用

**不要使用：** 不要在模组运行期 `new Vec2BasicTypeSerializer()` 或手动调用其方法——它仅被存档管线内部使用，依赖 [SaveManager](../SaveManager) 提供的 `IWriter`/`IReader`。

**何时需要了解它：** 当排查「为什么存档里某个二维坐标加载后不对」，或确认 `Vec2` 在存档里以 x、y 两个 float 原样落盘时。若你要持久化自定义的二维向量类型，应自行实现 `IBasicTypeSerializer` 并通过 `SaveableTypeDefiner.DefineBasicTypes()` 的 `AddBasicTypeDefinition` 登记。

## 依赖图

- 契约上游：[IBasicTypeSerializer](../IBasicTypeSerializer) 定义它必须实现的三个方法。
- 类型 schema：[BasicTypeDefinition](../BasicTypeDefinition) 持有 `Serializer` 实例，由 [SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner) 在 `DefineBasicTypes()` 中以 `AddBasicTypeDefinition(typeof(Vec2), 11, new Vec2BasicTypeSerializer())` 登记。
- 选择器：[SaveManager](../SaveManager) 在序列化 `Vec2` 字段时按类型找到该定义并调用本类。
- 下游字节层：`IWriter.WriteVec2` / `IReader.ReadVec2` 写出两个 float；整体机制见 [存档系统架构](../../../architecture/save-system)。
- 自定义登记入口：[SaveableTypeDefiner](../SaveableTypeDefiner) 是所有类型定义器的基类。

## 风险

- **布局必须逐字节匹配引擎。** `WriteVec2` 写出 x、y 两个 float（共 8 字节），`GetSizeInBytes()` 返回 `8`。写入端或读取端任一方改为 `WriteFloat`/`ReadFloat` 数量不一致都会让整段存档错位。
- **浮点即真相。** 向量按 float 存储；反序列化得到的 `Vec2` 与存档前浮点一致，但不要假设它与某个整型坐标完全相等。
- **不要重排分量顺序。** `WriteVec2` 先 x 后 y；反序列化严格按 `ReadVec2()` 读回，任何重排都会让横纵坐标互换。

## 成员说明

### void Serialize(IWriter writer, object value)

显式接口实现。把 `value` 拆箱为 `Vec2`，调用 `writer.WriteVec2(vec)` 一次写出 x、y 两个 float，共 8 字节。

### object Deserialize(IReader reader)

显式接口实现。直接 `return reader.ReadVec2()`，按写入顺序读回两个 float 并重组成 `Vec2` 返回（装箱为 `object`）。

### int GetSizeInBytes()

返回固定值 `8`，即两个 float 的字节宽度。

## 示例

给实体声明一个 `Vec2` 类型的可存档字段，存档时引擎自动路由到 `Vec2BasicTypeSerializer`：

```csharp
// 标成 Vec2 的 [SaveableField]，存读都由 Vec2BasicTypeSerializer 完成
[SaveableField(3)]
public Vec2 WorldPosition2D;

// 触发一次保存：SaveManager 按字段类型选中 Vec2BasicTypeSerializer
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Campaign.Current, metaData, saveName, driver);
```

若你有自定义的二维向量类型，按同样模式登记专属序列化器：

```csharp
protected internal override void DefineBasicTypes()
{
    base.DefineBasicTypes();
    AddBasicTypeDefinition(typeof(MyVec2), 550, new MyVec2BasicTypeSerializer());
}
```

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[IBasicTypeSerializer](../IBasicTypeSerializer) · [Vec2iBasicTypeSerializer](../Vec2iBasicTypeSerializer) · [Vec3BasicTypeSerializer](../Vec3BasicTypeSerializer) · [BasicTypeDefinition](../BasicTypeDefinition) · [SaveManager](../SaveManager)
