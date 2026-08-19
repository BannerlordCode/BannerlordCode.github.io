---
title: "Vec3BasicTypeSerializer"
description: "将 Vec3（三维向量）值结构序列化为固定 16 字节（x、y、z、w 四个 float）的存档基础类型序列化器；当 [SaveableField] 字段类型为 Vec3 时由 SaveManager 自动选用。"
---

# Vec3BasicTypeSerializer

**命名空间：** `TaleWorlds.SaveSystem.Definition`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `internal class Vec3BasicTypeSerializer : IBasicTypeSerializer`
**源文件：** `TaleWorlds.SaveSystem/Definition/Vec3BasicTypeSerializer.cs`

## 概述

`Vec3BasicTypeSerializer` 实现了 `IBasicTypeSerializer`，专门处理 `TaleWorlds.Library.Vec3` 这种三维向量值结构。它通过 `IWriter.WriteVec3` 把 `Vec3` 写出，加载时按同样方式用 `IReader.ReadVec3` 读回。模组侧不直接调用它：`[SaveableField]` 字段类型为 `Vec3` 时，[SaveManager](../SaveManager) 按类型自动路由到这里。

## 心智模型

把它想成存档系统里「三维坐标 / 方向」的搬运工。注意引擎的 `WriteVec3` 实际写出 **四个** float（x、y、z、w），因此 `Vec3` 在存档里占 16 字节而非直觉上的 12。你从不在业务代码里 `new` 它，只声明 `Vec3` 类型的可存档字段；字节宽度与 `IWriter`/`IReader` 必须完全一致，否则坐标会被静默错位、后续所有字段跟着错位。

## 何时使用 / 何时不要使用

**不要使用：** 不要在模组运行期 `new Vec3BasicTypeSerializer()` 或手动调用其方法——它仅被存档管线内部使用，依赖 [SaveManager](../SaveManager) 提供的 `IWriter`/`IReader`。

**何时需要了解它：** 当排查「为什么存档里某个三维坐标加载后不对」，或确认 `Vec3` 在存档里占 16 字节（含 w 分量）、以 x、y、z、w 顺序落盘时。若你要持久化自定义的三维向量类型，应自行实现 `IBasicTypeSerializer` 并通过 `SaveableTypeDefiner.DefineBasicTypes()` 的 `AddBasicTypeDefinition` 登记。

## 依赖图

- 契约上游：[IBasicTypeSerializer](../IBasicTypeSerializer) 定义它必须实现的三个方法。
- 类型 schema：[BasicTypeDefinition](../BasicTypeDefinition) 持有 `Serializer` 实例，由 [SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner) 在 `DefineBasicTypes()` 中以 `AddBasicTypeDefinition(typeof(Vec3), 13, new Vec3BasicTypeSerializer())` 登记。
- 选择器：[SaveManager](../SaveManager) 在序列化 `Vec3` 字段时按类型找到该定义并调用本类。
- 下游字节层：`IWriter.WriteVec3` / `IReader.ReadVec3` 写出四个 float；整体机制见 [存档系统架构](../../../architecture/save-system)。
- 自定义登记入口：[SaveableTypeDefiner](../SaveableTypeDefiner) 是所有类型定义器的基类。

## 风险

- **Vec3 实际是 4 个 float。** 引擎 `WriteVec3` 写出 x、y、z、w 四个 float，因此 `GetSizeInBytes()` 返回 `16` 而非 12。若你在自定义版本里按「3 个 float = 12 字节」写布局，会与 `ReadVec3` 的 4-float 读取错位，导致整段存档损坏。
- **布局逐字节匹配引擎。** 写入端 `WriteVec3` 与读取端 `ReadVec3` 必须成对对称；数量不一致会让后续字段全体错位。
- **浮点即真相。** 向量按 float 存储；反序列化得到的 `Vec3` 与存档前浮点一致，但不要假设它与某个整型坐标完全相等。

## 成员说明

### void Serialize(IWriter writer, object value)

显式接口实现。把 `value` 拆箱为 `Vec3`，调用 `writer.WriteVec3(vec)` 一次写出 x、y、z、w 四个 float，共 16 字节。

### object Deserialize(IReader reader)

显式接口实现。直接 `return reader.ReadVec3()`，按写入顺序读回四个 float 并重组成 `Vec3` 返回（装箱为 `object`）。

### int GetSizeInBytes()

返回固定值 `16`，即四个 float 的字节宽度（注意是 16 不是 12）。

## 示例

给实体声明一个 `Vec3` 类型的可存档字段，存档时引擎自动路由到 `Vec3BasicTypeSerializer`：

```csharp
// 标成 Vec3 的 [SaveableField]，存读都由 Vec3BasicTypeSerializer 完成
[SaveableField(2)]
public Vec3 WorldPosition;

// 触发一次保存：SaveManager 按字段类型选中 Vec3BasicTypeSerializer
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Campaign.Current, metaData, saveName, driver);
```

若你有自定义的三维向量类型，按同样模式登记专属序列化器：

```csharp
protected internal override void DefineBasicTypes()
{
    base.DefineBasicTypes();
    AddBasicTypeDefinition(typeof(MyVec3), 570, new MyVec3BasicTypeSerializer());
}
```

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[IBasicTypeSerializer](../IBasicTypeSerializer) · [Vec2BasicTypeSerializer](../Vec2BasicTypeSerializer) · [Vec3iBasicTypeSerializer](../Vec3iBasicTypeSerializer) · [BasicTypeDefinition](../BasicTypeDefinition) · [SaveManager](../SaveManager)
