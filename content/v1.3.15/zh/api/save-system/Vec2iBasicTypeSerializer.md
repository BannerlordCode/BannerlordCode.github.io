---
title: "Vec2iBasicTypeSerializer"
description: "将 Vec2i（二维整型向量）值结构序列化为固定 8 字节的存档基础类型序列化器；注意它写入时把两个 int 组件按 float 字节写出、读取时按 int 字节还原——两端均为 4 字节所以布局一致。字段类型为 Vec2i 时由 SaveManager 自动选用。"
---

# Vec2iBasicTypeSerializer

**命名空间：** `TaleWorlds.SaveSystem.Definition`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `internal class Vec2iBasicTypeSerializer : IBasicTypeSerializer`
**源文件：** `TaleWorlds.SaveSystem/Definition/Vec2iBasicTypeSerializer.cs`

## 概述

`Vec2iBasicTypeSerializer` 实现了 `IBasicTypeSerializer`，专门处理 `TaleWorlds.Library.Vec2i` 这种二维**整型**向量值结构。`Vec2i` 的 `Item1`、`Item2` 都是 `int`，但本序列化器在写入时把它们各自转型为 `float` 再写出（即按 4 字节 float 位模式落盘），加载时则用 `ReadInt()` 把同样的 4 字节按 `int` 还原。模组侧不直接调用它：`[SaveableField]` 字段类型为 `Vec2i` 时，[SaveManager](../SaveManager) 按类型自动路由到这里。

## 心智模型

把它想成存档系统里「整数网格坐标」的搬运工。它的字节宽度仍是 8 字节（两个 4 字节分量），但有一个不对称细节：**写入走 `WriteFloat`、读取走 `ReadInt`**。由于 float 与 int 在内存里都是 4 字节，位模式被原样搬运，因此两端对称、存档不坏。你从不在业务代码里 `new` 它，只声明 `Vec2i` 类型的可存档字段；理解这个写/读不对称能避免你误改一端而导致整段错位。

## 何时使用 / 何时不要使用

**不要使用：** 不要在模组运行期 `new Vec2iBasicTypeSerializer()` 或手动调用其方法——它仅被存档管线内部使用，依赖 [SaveManager](../SaveManager) 提供的 `IWriter`/`IReader`。

**何时需要了解它：** 当排查「为什么整型坐标加载后数值异常」，或确认 `Vec2i` 在存档里占 8 字节、且写入/读取用了不同的原语调用时。若你要持久化自定义的整型向量类型，应自行实现 `IBasicTypeSerializer` 并通过 `SaveableTypeDefiner.DefineBasicTypes()` 的 `AddBasicTypeDefinition` 登记。

## 依赖图

- 契约上游：[IBasicTypeSerializer](../IBasicTypeSerializer) 定义它必须实现的三个方法。
- 类型 schema：[BasicTypeDefinition](../BasicTypeDefinition) 持有 `Serializer` 实例，由 [SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner) 在 `DefineBasicTypes()` 中以 `AddBasicTypeDefinition(typeof(Vec2i), 12, new Vec2iBasicTypeSerializer())` 登记。
- 选择器：[SaveManager](../SaveManager) 在序列化 `Vec2i` 字段时按类型找到该定义并调用本类。
- 下游字节层：`IWriter.WriteFloat` / `IReader.ReadInt` 各写出 4 字节；整体机制见 [存档系统架构](../../../architecture/save-system)。
- 自定义登记入口：[SaveableTypeDefiner](../SaveableTypeDefiner) 是所有类型定义器的基类。

## 风险

- **写/读原语调用的不对称是刻意的。** 写入用 `WriteFloat((float)vec2i.Item1)` / `WriteFloat((float)vec2i.Item2)`，读取用两次 `ReadInt()`。两者都是 4 字节，位模式被原样搬运，因此布局一致。若将来有人把写入改成 `WriteInt`、读取仍是 `ReadInt` 则无碍；但若只改一端（如写入 `WriteFloat` 而读取 `ReadFloat`），整型值会被当作浮点解释而损坏。
- **固定 8 字节必须与读出一致。** `GetSizeInBytes()` 返回 `8`（两个 4 字节分量）。写入与读取的字节数不对称会让整段存档错位。
- **float→int 转型只保证位宽。** 这里依赖的是 int 与 float 同为 4 字节，而不是数值相等；不要把 `WriteFloat` 误解为在「转换数值」，它只是以 float 位模式承载 int 的 4 字节。

## 成员说明

### void Serialize(IWriter writer, object value)

显式接口实现。把 `value` 拆箱为 `Vec2i`，依次 `writer.WriteFloat((float)vec2i.Item1)`、`writer.WriteFloat((float)vec2i.Item2)`，各写出 4 字节（共 8 字节），以 float 位模式承载两个 int 分量。

### object Deserialize(IReader reader)

显式接口实现。连续两次 `reader.ReadInt()` 读回两个 int 分量，用 `new Vec2i(num, num2)` 重建整型向量并返回（装箱为 `object`）。

### int GetSizeInBytes()

返回固定值 `8`，即两个 4 字节分量的字节宽度。

## 示例

给实体声明一个 `Vec2i` 类型的可存档字段，存档时引擎自动路由到 `Vec2iBasicTypeSerializer`：

```csharp
// 标成 Vec2i 的 [SaveableField]，存读都由 Vec2iBasicTypeSerializer 完成
[SaveableField(4)]
public Vec2i GridCell;

// 触发一次保存：SaveManager 按字段类型选中 Vec2iBasicTypeSerializer
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveOutput output = SaveManager.Save(Campaign.Current, metaData, saveName, driver);
```

若你有自定义的整型向量类型，按同样模式登记专属序列化器（注意写/读字节数对称）：

```csharp
protected internal override void DefineBasicTypes()
{
    base.DefineBasicTypes();
    AddBasicTypeDefinition(typeof(MyVec2i), 560, new MyVec2iBasicTypeSerializer());
}
```

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[IBasicTypeSerializer](../IBasicTypeSerializer) · [Vec2BasicTypeSerializer](../Vec2BasicTypeSerializer) · [Vec3iBasicTypeSerializer](../Vec3iBasicTypeSerializer) · [BasicTypeDefinition](../BasicTypeDefinition) · [SaveManager](../SaveManager)
