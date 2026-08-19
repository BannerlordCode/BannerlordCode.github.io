---
title: "Mat2BasicTypeSerializer"
description: "将 Mat2（2×2 矩阵）值结构序列化为固定 16 字节（两个 Vec2 列向量，各 2 个 float）的存档基础类型序列化器；当 [SaveableField] 字段类型为 Mat2 时由 SaveManager 自动选用。"
---

# Mat2BasicTypeSerializer

**命名空间：** `TaleWorlds.SaveSystem.Definition`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `internal class Mat2BasicTypeSerializer : IBasicTypeSerializer`
**源文件：** `TaleWorlds.SaveSystem/Definition/Mat2BasicTypeSerializer.cs`

## 概述

`Mat2BasicTypeSerializer` 实现了 `IBasicTypeSerializer`，专门处理 `TaleWorlds.Library.Mat2` 这种 2×2 值矩阵。它把一个 `Mat2` 拆成两个列向量 `s` 与 `f`，按顺序写入存档；加载时按同样顺序读回并重建矩阵。模组侧同样不直接调用它：当某个 `[SaveableField]` 字段类型是 `Mat2` 时，[SaveManager](../SaveManager) 按类型自动路由到这里。

## 心智模型

把它想成存档系统里「2×2 旋转/缩放矩阵」的搬运工。矩阵在引擎里以两个列向量 `s`、`f` 表达，序列化器依次写出 `s` 再 `f`（各自是两个 float 的 `Vec2`），因此落盘布局是「s.x, s.y, f.x, f.y」共 4 个 float = 16 字节。你从不在业务代码里 `new` 它，只声明 `Mat2` 类型的可存档字段；字节顺序一旦与 `IWriter`/`IReader` 不一致，读取出来的矩阵就会行列错乱。

## 何时使用 / 何时不要使用

**不要使用：** 不要在模组运行期 `new Mat2BasicTypeSerializer()` 或手动调用其方法——它仅被存档管线内部使用，且依赖 [SaveManager](../SaveManager) 提供的 `IWriter`/`IReader`。

**何时需要了解它：** 当你排查「为什么存档里某个 2D 朝向/缩放加载后不对」，或确认 `Mat2` 在存档里占 16 字节、列向量顺序为 `s` 先于 `f` 时。若你要持久化自定义的 2×2 矩阵类型，应自行实现 `IBasicTypeSerializer` 并通过 `SaveableTypeDefiner.DefineBasicTypes()` 的 `AddBasicTypeDefinition` 登记，而不是改动本类。

## 依赖图

- 契约上游：[IBasicTypeSerializer](../IBasicTypeSerializer) 定义它必须实现的三个方法。
- 类型 schema：[BasicTypeDefinition](../BasicTypeDefinition) 持有 `Serializer` 实例，由 [SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner) 在 `DefineBasicTypes()` 中以 `AddBasicTypeDefinition(typeof(Mat2), 15, new Mat2BasicTypeSerializer())` 登记。
- 选择器：[SaveManager](../SaveManager) 在序列化 `Mat2` 字段时按类型找到该定义并调用本类。
- 下游字节层：`IWriter.WriteVec2` / `IReader.ReadVec2` 写出两个 float；整体机制见 [存档系统架构](../../../architecture/save-system)。
- 自定义登记入口：[SaveableTypeDefiner](../SaveableTypeDefiner) 是所有类型定义器（含自定义矩阵序列化器）的基类。

## 风险

- **列向量顺序即真相。** 写入顺序是 `s` 先、`f` 后；`Deserialize` 严格按 `ReadVec2()`、`ReadVec2()` 读回并用 `new Mat2(vec.x, vec.y, vec2.x, vec2.y)` 重组。若有人交换 `s`/`f` 的写入顺序，矩阵会被转置或错乱。
- **固定 16 字节必须与读出一致。** `GetSizeInBytes()` 返回 `16`（两个 `Vec2`，各 8 字节）。写入端或读取端任一方改为 `WriteFloat`/`ReadFloat` 数量不一致都会让整段存档错位。
- **不要手搓字节布局。** 直接调用 `IWriter.WriteVec2` 时要保证与 `Deserialize` 的 `ReadVec2` 个数和顺序完全对称，否则存档损坏。

## 成员说明

### void Serialize(IWriter writer, object value)

显式接口实现。把 `value` 拆箱为 `Mat2`，先 `writer.WriteVec2(mat.s)` 再 `writer.WriteVec2(mat.f)`，共写出两个 `Vec2`（4 个 float = 16 字节）。

### object Deserialize(IReader reader)

显式接口实现。连续 `reader.ReadVec2()` 读回两个 `Vec2`，再用 `new Mat2(vec.x, vec.y, vec2.x, vec2.y)` 重建矩阵并返回（装箱为 `object`）。

### int GetSizeInBytes()

返回固定值 `16`，即两个 `Vec2` 列的字节宽度。

## 示例

给实体声明一个 `Mat2` 类型的可存档字段，存档时引擎自动路由到 `Mat2BasicTypeSerializer`：

```csharp
// 标成 Mat2 的 [SaveableField]，存读都由 Mat2BasicTypeSerializer 完成
[SaveableField(7)]
public Mat2 StretchTransform;

// 触发一次保存：SaveManager 按字段类型选中 Mat2BasicTypeSerializer
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Campaign.Current, metaData, saveName, driver);
```

若你有自定义的 2×2 矩阵类型，按同样模式登记专属序列化器即可：

```csharp
protected internal override void DefineBasicTypes()
{
    base.DefineBasicTypes();
    AddBasicTypeDefinition(typeof(MyMat2), 510, new MyMat2BasicTypeSerializer());
}
```

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[IBasicTypeSerializer](../IBasicTypeSerializer) · [Mat3BasicTypeSerializer](../Mat3BasicTypeSerializer) · [BasicTypeDefinition](../BasicTypeDefinition) · [SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner) · [SaveManager](../SaveManager)
