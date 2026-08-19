---
title: "Vec3iBasicTypeSerializer"
description: "将 Vec3i（三维整型向量）值结构序列化为固定 12 字节（X、Y、Z 三个 int）的存档基础类型序列化器；当 [SaveableField] 字段类型为 Vec3i 时由 SaveManager 自动选用。"
---

# Vec3iBasicTypeSerializer

**命名空间：** `TaleWorlds.SaveSystem.Definition`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `internal class Vec3iBasicTypeSerializer : IBasicTypeSerializer`
**源文件：** `TaleWorlds.SaveSystem/Definition/Vec3iBasicTypeSerializer.cs`

## 概述

`Vec3iBasicTypeSerializer` 实现了 `IBasicTypeSerializer`，专门处理 `TaleWorlds.Library.Vec3i` 这种三维**整型**向量值结构。它把 `Vec3i` 的 `X`、`Y`、`Z` 三个 `int` 分量通过 `IWriter.WriteVec3Int` 写成三个 int（共 12 字节），加载时按同样方式用 `IReader.ReadVec3Int` 读回。模组侧不直接调用它：`[SaveableField]` 字段类型为 `Vec3i` 时，[SaveManager](../SaveManager) 按类型自动路由到这里。

## 心智模型

把它想成存档系统里「整数三维网格坐标」的搬运工。与 `Vec3`（四个 float、16 字节）不同，`Vec3i` 是三个 `int`、共 12 字节，且直接以整型位模式落盘，不存在 `Vec2i` 那种写 float / 读 int 的不对称。你从不在业务代码里 `new` 它，只声明 `Vec3i` 类型的可存档字段；字节宽度与 `IWriter`/`IReader` 必须完全一致，否则坐标会被静默错位。

## 何时使用 / 何时不要使用

**不要使用：** 不要在模组运行期 `new Vec3iBasicTypeSerializer()` 或手动调用其方法——它仅被存档管线内部使用，依赖 [SaveManager](../SaveManager) 提供的 `IWriter`/`IReader`。

**何时需要了解它：** 当排查「为什么整型三维坐标加载后数值异常」，或确认 `Vec3i` 在存档里占 12 字节、以 X、Y、Z 顺序原样落盘时。若你要持久化自定义的三维整型向量类型，应自行实现 `IBasicTypeSerializer` 并通过 `SaveableTypeDefiner.DefineBasicTypes()` 的 `AddBasicTypeDefinition` 登记。

## 依赖图

- 契约上游：[IBasicTypeSerializer](../IBasicTypeSerializer) 定义它必须实现的三个方法。
- 类型 schema：[BasicTypeDefinition](../BasicTypeDefinition) 持有 `Serializer` 实例，由 [SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner) 在 `DefineBasicTypes()` 中以 `AddBasicTypeDefinition(typeof(Vec3i), 14, new Vec3iBasicTypeSerializer())` 登记。
- 选择器：[SaveManager](../SaveManager) 在序列化 `Vec3i` 字段时按类型找到该定义并调用本类。
- 下游字节层：`IWriter.WriteVec3Int` / `IReader.ReadVec3Int` 写出三个 int；整体机制见 [存档系统架构](../../../architecture/save-system)。
- 自定义登记入口：[SaveableTypeDefiner](../SaveableTypeDefiner) 是所有类型定义器的基类。

## 风险

- **布局逐字节匹配引擎。** `WriteVec3Int` 写出 X、Y、Z 三个 int（共 12 字节），`GetSizeInBytes()` 返回 `12`。写入端或读取端任一方改为 `WriteInt`/`ReadInt` 数量不一致都会让整段存档错位。
- **与 Vec3 区分开。** `Vec3i` 是 12 字节整型，而 `Vec3` 是 16 字节浮点；不要用错序列化器或混用 `WriteVec3` 与 `WriteVec3Int`，否则位宽与解释方式都错。
- **不要重排分量顺序。** 写入顺序固定为 X → Y → Z；反序列化严格按 `ReadVec3Int()` 读回，任何重排都会让三个轴互换。

## 成员说明

### void Serialize(IWriter writer, object value)

显式接口实现。把 `value` 拆箱为 `Vec3i`，调用 `writer.WriteVec3Int(vec3i)` 一次写出 X、Y、Z 三个 int，共 12 字节。

### object Deserialize(IReader reader)

显式接口实现。直接 `return reader.ReadVec3Int()`，按写入顺序读回三个 int 并重组成 `Vec3i` 返回（装箱为 `object`）。

### int GetSizeInBytes()

返回固定值 `12`，即三个 int 的字节宽度。

## 示例

给实体声明一个 `Vec3i` 类型的可存档字段，存档时引擎自动路由到 `Vec3iBasicTypeSerializer`：

```csharp
// 标成 Vec3i 的 [SaveableField]，存读都由 Vec3iBasicTypeSerializer 完成
[SaveableField(6)]
public Vec3i GridCoordinate;

// 触发一次保存：SaveManager 按字段类型选中 Vec3iBasicTypeSerializer
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Campaign.Current, metaData, saveName, driver);
```

若你有自定义的三维整型向量类型，按同样模式登记专属序列化器：

```csharp
protected internal override void DefineBasicTypes()
{
    base.DefineBasicTypes();
    AddBasicTypeDefinition(typeof(MyVec3i), 580, new MyVec3iBasicTypeSerializer());
}
```

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[IBasicTypeSerializer](../IBasicTypeSerializer) · [Vec2iBasicTypeSerializer](../Vec2iBasicTypeSerializer) · [Vec3BasicTypeSerializer](../Vec3BasicTypeSerializer) · [BasicTypeDefinition](../BasicTypeDefinition) · [SaveManager](../SaveManager)
