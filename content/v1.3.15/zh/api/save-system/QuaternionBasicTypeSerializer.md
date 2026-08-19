---
title: "QuaternionBasicTypeSerializer"
description: "将 Quaternion（四元数）值结构序列化为固定 16 字节（X、Y、Z、W 四个 float）的存档基础类型序列化器；当 [SaveableField] 字段类型为 Quaternion 时由 SaveManager 自动选用。"
---

# QuaternionBasicTypeSerializer

**命名空间：** `TaleWorlds.SaveSystem.Definition`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `internal class QuaternionBasicTypeSerializer : IBasicTypeSerializer`
**源文件：** `TaleWorlds.SaveSystem/Definition/QuaternionBasicTypeSerializer.cs`

## 概述

`QuaternionBasicTypeSerializer` 实现了 `IBasicTypeSerializer`，专门处理 `TaleWorlds.Library.Quaternion` 这种四元数值结构。它把四元数的 `X`、`Y`、`Z`、`W` 四个分量按顺序写成四个 float，加载时按同样顺序读回并用 `new Quaternion(...)` 重建。模组侧不直接调用它：`[SaveableField]` 字段类型为 `Quaternion` 时，[SaveManager](../SaveManager) 按类型自动路由到这里。

## 心智模型

把它想成存档系统里「旋转四元数」的搬运工。四元数由 X、Y、Z、W 四个 float 表达，序列化器依次写出这四个分量，落盘布局是 16 字节。你从不在业务代码里 `new` 它，只声明 `Quaternion` 类型的可存档字段；分量顺序与 `IWriter`/`IReader` 必须完全一致，否则加载出来的朝向会被静默扭曲。

## 何时使用 / 何时不要使用

**不要使用：** 不要在模组运行期 `new QuaternionBasicTypeSerializer()` 或手动调用其方法——它仅被存档管线内部使用，依赖 [SaveManager](../SaveManager) 提供的 `IWriter`/`IReader`。

**何时需要了解它：** 当排查「为什么存档里某个旋转加载后朝向不对」，或确认 `Quaternion` 在存档里以 X、Y、Z、W 四个 float 原样落盘时。若你要持久化自定义的四元数/旋转类型，应自行实现 `IBasicTypeSerializer` 并通过 `SaveableTypeDefiner.DefineBasicTypes()` 的 `AddBasicTypeDefinition` 登记。

## 依赖图

- 契约上游：[IBasicTypeSerializer](../IBasicTypeSerializer) 定义它必须实现的三个方法。
- 类型 schema：[BasicTypeDefinition](../BasicTypeDefinition) 持有 `Serializer` 实例，由 [SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner) 在 `DefineBasicTypes()` 中以 `AddBasicTypeDefinition(typeof(Quaternion), 18, new QuaternionBasicTypeSerializer())` 登记。
- 选择器：[SaveManager](../SaveManager) 在序列化 `Quaternion` 字段时按类型找到该定义并调用本类。
- 下游字节层：`IWriter.WriteFloat` / `IReader.ReadFloat` 写出单个 float；整体机制见 [存档系统架构](../../../architecture/save-system)。
- 自定义登记入口：[SaveableTypeDefiner](../SaveableTypeDefiner) 是所有类型定义器的基类。

## 风险

- **分量顺序即真相。** 写入顺序固定为 X → Y → Z → W；`Deserialize` 严格按四次 `ReadFloat()` 读回并用 `new Quaternion(num, num2, num3, num4)` 重组。任意交换分量顺序都会让四元数代表的旋转被扭曲。
- **固定 16 字节必须与读出一致。** `GetSizeInBytes()` 返回 `16`（四个 float）。写入与读取的 `WriteFloat`/`ReadFloat` 数量不对称会让整段存档错位。
- **不要归一化或压缩。** 序列化原样搬运四个 float，不做归一化；若你在自定义版本里随手归一化，会与读取端预期不一致。

## 成员说明

### void Serialize(IWriter writer, object value)

显式接口实现。把 `value` 拆箱为 `Quaternion`，依次 `writer.WriteFloat(quaternion.X)`、`WriteFloat(quaternion.Y)`、`WriteFloat(quaternion.Z)`、`WriteFloat(quaternion.W)`，共写出四个 float（16 字节）。

### object Deserialize(IReader reader)

显式接口实现。连续四次 `reader.ReadFloat()` 读回四个分量，用 `new Quaternion(num, num2, num3, num4)` 重建四元数并返回（装箱为 `object`）。

### int GetSizeInBytes()

返回固定值 `16`，即四个 float 的字节宽度。

## 示例

给实体声明一个 `Quaternion` 类型的可存档字段，存档时引擎自动路由到 `QuaternionBasicTypeSerializer`：

```csharp
// 标成 Quaternion 的 [SaveableField]，存读都由 QuaternionBasicTypeSerializer 完成
[SaveableField(8)]
public Quaternion ItemRotation;

// 触发一次保存：SaveManager 按字段类型选中 QuaternionBasicTypeSerializer
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Campaign.Current, metaData, saveName, driver);
```

若你有自定义旋转类型，按同样模式登记专属序列化器：

```csharp
protected internal override void DefineBasicTypes()
{
    base.DefineBasicTypes();
    AddBasicTypeDefinition(typeof(MyRotation), 540, new MyRotationBasicTypeSerializer());
}
```

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[IBasicTypeSerializer](../IBasicTypeSerializer) · [Vec3BasicTypeSerializer](../Vec3BasicTypeSerializer) · [Mat3BasicTypeSerializer](../Mat3BasicTypeSerializer) · [BasicTypeDefinition](../BasicTypeDefinition) · [SaveManager](../SaveManager)
