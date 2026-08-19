---
title: "Mat3BasicTypeSerializer"
description: "将 Mat3（3×3 矩阵）值结构序列化为固定 48 字节（三个 Vec3 列向量，各 4 个 float）的存档基础类型序列化器；当 [SaveableField] 字段类型为 Mat3 时由 SaveManager 自动选用。"
---

# Mat3BasicTypeSerializer

**命名空间：** `TaleWorlds.SaveSystem.Definition`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `internal class Mat3BasicTypeSerializer : IBasicTypeSerializer`
**源文件：** `TaleWorlds.SaveSystem/Definition/Mat3BasicTypeSerializer.cs`

## 概述

`Mat3BasicTypeSerializer` 实现了 `IBasicTypeSerializer`，专门处理 `TaleWorlds.Library.Mat3` 这种 3×3 值矩阵。它把一个 `Mat3` 拆成三个列向量 `s`、`f`、`u`，按顺序写入存档；加载时按同样顺序读回并用 `new Mat3(in vec, in vec2, in vec3)` 重建。模组侧不直接调用它：`[SaveableField]` 字段类型为 `Mat3` 时，[SaveManager](../SaveManager) 按类型自动路由到这里。

## 心智模型

把它想成存档系统里「3×3 旋转矩阵」的搬运工。矩阵在引擎里以三个列向量 `s`、`f`、`u` 表达，序列化器依次写出 `s` → `f` → `u`，每个都是含四个 float 的 `Vec3`，因此落盘布局是 3×16 = 48 字节。你从不在业务代码里 `new` 它，只声明 `Mat3` 类型的可存档字段；列向量顺序与 `IWriter`/`IReader` 必须完全一致，否则矩阵会被转置、朝向错乱。

## 何时使用 / 何时不要使用

**不要使用：** 不要在模组运行期 `new Mat3BasicTypeSerializer()` 或手动调用其方法——它仅被存档管线内部使用，依赖 [SaveManager](../SaveManager) 提供的 `IWriter`/`IReader`。

**何时需要了解它：** 当排查「为什么存档里某个 3D 朝向加载后不对」，或确认 `Mat3` 在存档里占 48 字节、列向量顺序为 `s`、`f`、`u` 时。若你要持久化自定义的 3×3 矩阵类型，应自行实现 `IBasicTypeSerializer` 并通过 `SaveableTypeDefiner.DefineBasicTypes()` 的 `AddBasicTypeDefinition` 登记。

## 依赖图

- 契约上游：[IBasicTypeSerializer](../IBasicTypeSerializer) 定义它必须实现的三个方法。
- 类型 schema：[BasicTypeDefinition](../BasicTypeDefinition) 持有 `Serializer` 实例，由 [SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner) 在 `DefineBasicTypes()` 中以 `AddBasicTypeDefinition(typeof(Mat3), 16, new Mat3BasicTypeSerializer())` 登记。
- 选择器：[SaveManager](../SaveManager) 在序列化 `Mat3` 字段时按类型找到该定义并调用本类。
- 下游字节层：`IWriter.WriteVec3` / `IReader.ReadVec3` 写出四个 float 的 `Vec3`；整体机制见 [存档系统架构](../../../architecture/save-system)。
- 自定义登记入口：[SaveableTypeDefiner](../SaveableTypeDefiner) 是所有类型定义器的基类。

## 风险

- **列向量顺序即真相。** 写入顺序固定为 `s` → `f` → `u`；`Deserialize` 严格按三次 `ReadVec3()` 读回并用 `new Mat3(in vec, in vec2, in vec3)` 重组。任意交换列向量顺序都会让矩阵被转置。
- **固定 48 字节必须与读出一致。** `GetSizeInBytes()` 返回 `48`（三个 `Vec3`，各 16 字节）。写入与读取的 `WriteVec3`/`ReadVec3` 数量不对称会让整段存档错位。
- **Vec3 实际是 4 个 float。** `WriteVec3` 写出 x、y、z、w 四个 float，所以每个列向量占 16 字节而非 12；改字节宽度会破坏布局。

## 成员说明

### void Serialize(IWriter writer, object value)

显式接口实现。把 `value` 拆箱为 `Mat3`，依次 `writer.WriteVec3(mat.s)`、`writer.WriteVec3(mat.f)`、`writer.WriteVec3(mat.u)`，共写出三个 `Vec3`（48 字节）。

### object Deserialize(IReader reader)

显式接口实现。连续三次 `reader.ReadVec3()` 读回三个列向量，再用 `new Mat3(in vec, in vec2, in vec3)` 重建矩阵并返回（装箱为 `object`）。

### int GetSizeInBytes()

返回固定值 `48`，即三个 `Vec3` 列的字节宽度。

## 示例

给实体声明一个 `Mat3` 类型的可存档字段，存档时引擎自动路由到 `Mat3BasicTypeSerializer`：

```csharp
// 标成 Mat3 的 [SaveableField]，存读都由 Mat3BasicTypeSerializer 完成
[SaveableField(9)]
public Mat3 BodyOrientation;

// 触发一次保存：SaveManager 按字段类型选中 Mat3BasicTypeSerializer
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Campaign.Current, metaData, saveName, driver);
```

若你有自定义的 3×3 矩阵类型，按同样模式登记专属序列化器：

```csharp
protected internal override void DefineBasicTypes()
{
    base.DefineBasicTypes();
    AddBasicTypeDefinition(typeof(MyMat3), 520, new MyMat3BasicTypeSerializer());
}
```

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[IBasicTypeSerializer](../IBasicTypeSerializer) · [Mat2BasicTypeSerializer](../Mat2BasicTypeSerializer) · [MatrixFrameBasicTypeSerializer](../MatrixFrameBasicTypeSerializer) · [BasicTypeDefinition](../BasicTypeDefinition) · [SaveManager](../SaveManager)
