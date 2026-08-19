---
title: "MatrixFrameBasicTypeSerializer"
description: "将 MatrixFrame（含原点平移 + 3×3 旋转的变换矩阵）序列化为存档基础类型序列化器；当 [SaveableField] 字段类型为 MatrixFrame 时由 SaveManager 自动选用，落盘顺序为 origin 后接 rotation 的三个列向量。"
---

# MatrixFrameBasicTypeSerializer

**命名空间：** `TaleWorlds.SaveSystem.Definition`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `internal class MatrixFrameBasicTypeSerializer : IBasicTypeSerializer`
**源文件：** `TaleWorlds.SaveSystem/Definition/MatrixFrameBasicTypeSerializer.cs`

## 概述

`MatrixFrameBasicTypeSerializer` 实现了 `IBasicTypeSerializer`，专门处理 `TaleWorlds.Library.MatrixFrame`——亦即场景里实体变换（位置 + 朝向）的值结构。它把一个 `MatrixFrame` 拆成平移部分 `origin`（一个 `Vec3`）和旋转部分 `rotation`（一个 `Mat3`，含列向量 `s`、`f`、`u`），按固定顺序写入；加载时按同样顺序读回并用 `new MatrixFrame(in mat, in vec)` 重建。模组侧不直接调用它：`[SaveableField]` 字段类型为 `MatrixFrame` 时，[SaveManager](../SaveManager) 按类型自动路由到这里。

## 心智模型

把它想成存档系统里「实体变换（位置 + 朝向）」的搬运工。`MatrixFrame` = `origin` 平移 + `rotation` 旋转矩阵，序列化器依次写出 `origin`、`rotation.s`、`rotation.f`、`rotation.u` 四个 `Vec3`。你从不在业务代码里 `new` 它，只声明 `MatrixFrame` 类型的可存档字段；`origin` 与 `rotation` 的相对顺序、以及旋转三个列向量的顺序，必须与 `IWriter`/`IReader` 完全一致，否则加载出来的实体会跑到错误位置或朝向翻转。

## 何时使用 / 何时不要使用

**不要使用：** 不要在模组运行期 `new MatrixFrameBasicTypeSerializer()` 或手动调用其方法——它仅被存档管线内部使用，依赖 [SaveManager](../SaveManager) 提供的 `IWriter`/`IReader`。

**何时需要了解它：** 当排查「为什么实体加载后位置漂移 / 朝向错乱」，或确认 `MatrixFrame` 在存档里按 `origin` 先于 `rotation` 的顺序落盘时。若你要持久化自定义的变换结构，应自行实现 `IBasicTypeSerializer` 并通过 `SaveableTypeDefiner.DefineBasicTypes()` 的 `AddBasicTypeDefinition` 登记。

## 依赖图

- 契约上游：[IBasicTypeSerializer](../IBasicTypeSerializer) 定义它必须实现的三个方法。
- 类型 schema：[BasicTypeDefinition](../BasicTypeDefinition) 持有 `Serializer` 实例，由 [SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner) 在 `DefineBasicTypes()` 中以 `AddBasicTypeDefinition(typeof(MatrixFrame), 17, new MatrixFrameBasicTypeSerializer())` 登记。
- 选择器：[SaveManager](../SaveManager) 在序列化 `MatrixFrame` 字段时按类型找到该定义并调用本类。
- 下游字节层：`IWriter.WriteVec3` / `IReader.ReadVec3` 写出四个 float 的 `Vec3`；整体机制见 [存档系统架构](../../../architecture/save-system)。
- 自定义登记入口：[SaveableTypeDefiner](../SaveableTypeDefiner) 是所有类型定义器的基类。

## 风险

- **origin 与 rotation 顺序即真相。** 写入顺序固定为 `origin` → `rotation.s` → `rotation.f` → `rotation.u`；`Deserialize` 严格按四次 `ReadVec3()` 读回，第一个作平移、后三个用 `new Mat3(...)` 组旋转再用 `new MatrixFrame(in mat, in vec)` 组合。任何顺序颠倒都会让平移被当成旋转、朝向被当成位置。
- **固定字节数必须与读出一致。** `GetSizeInBytes()` 返回引擎为 `MatrixFrame` 声明的固定字节数；写入的四次 `WriteVec3` 与读取的四次 `ReadVec3` 必须成对对称，否则整段存档错位。
- **旋转是 Mat3 列向量。** 不要误把 `rotation` 当成四元数或欧拉角——它是三个 `Vec3` 列向量，顺序 `s`/`f`/`u` 必须与 `Mat3BasicTypeSerializer` 的约定一致。

## 成员说明

### void Serialize(IWriter writer, object value)

显式接口实现。把 `value` 拆箱为 `MatrixFrame`，依次 `writer.WriteVec3(matrixFrame.origin)`、`writer.WriteVec3(matrixFrame.rotation.s)`、`writer.WriteVec3(matrixFrame.rotation.f)`、`writer.WriteVec3(matrixFrame.rotation.u)`，共写出四个 `Vec3`。

### object Deserialize(IReader reader)

显式接口实现。连续四次 `reader.ReadVec3()` 读回 `o`、`f` 及旋转的两个列向量，用 `new Mat3(reader.ReadVec3(), in f, reader.ReadVec3())` 重建旋转矩阵，再以 `new MatrixFrame(in mat, in o)` 组合平移与旋转返回（装箱为 `object`）。

### int GetSizeInBytes()

返回引擎为 `MatrixFrame` 声明的固定字节数（由源文件 `MatrixFrameBasicTypeSerializer.GetSizeInBytes()` 给出），与四次 `WriteVec3` 的布局相配。

## 示例

给实体声明一个 `MatrixFrame` 类型的可存档字段，存档时引擎自动路由到 `MatrixFrameBasicTypeSerializer`：

```csharp
// 标成 MatrixFrame 的 [SaveableField]，存读都由 MatrixFrameBasicTypeSerializer 完成
[SaveableField(5)]
public MatrixFrame EntityTransform;

// 触发一次保存：SaveManager 按字段类型选中 MatrixFrameBasicTypeSerializer
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Campaign.Current, metaData, saveName, driver);
```

若你有自定义的变换结构，按同样模式登记专属序列化器：

```csharp
protected internal override void DefineBasicTypes()
{
    base.DefineBasicTypes();
    AddBasicTypeDefinition(typeof(MyTransform), 530, new MyTransformBasicTypeSerializer());
}
```

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[IBasicTypeSerializer](../IBasicTypeSerializer) · [Mat3BasicTypeSerializer](../Mat3BasicTypeSerializer) · [Vec3BasicTypeSerializer](../Vec3BasicTypeSerializer) · [BasicTypeDefinition](../BasicTypeDefinition) · [SaveManager](../SaveManager)
