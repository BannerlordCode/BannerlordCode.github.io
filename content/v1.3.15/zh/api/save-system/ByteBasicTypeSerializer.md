---
title: "ByteBasicTypeSerializer"
description: "byte 基本类型序列化器：把 byte 字段以 1 字节写入存档流，由存档系统在遇到 byte 类型的 [SaveableField] 时自动选择，模组无需手动调用。"
---

# ByteBasicTypeSerializer

**命名空间：** `TaleWorlds.SaveSystem.Definition`
**模块：** `TaleWorlds.SaveSystem`
**类型：** `internal class ByteBasicTypeSerializer : IBasicTypeSerializer`
**源文件：** `TaleWorlds.SaveSystem/Definition/ByteBasicTypeSerializer.cs`

## 概述

`ByteBasicTypeSerializer` 是存档系统为 CLR 基本类型 `byte`（无符号 8 位整数）准备的内置序列化器。当某个 `[SaveableField]` / `[SaveableProperty]` 的静态类型是 `byte` 时，引擎在 `DefinitionContext` 中查到对应的 `BasicTypeDefinition`，由 `VariableSaveData` 在保存路径调用 `Serialize`、加载路径调用 `Deserialize`。它固定占用 1 字节，与 `bool`、`sbyte` 同属最小体积的原始值序列化器；你不应在模组里手动 `new` 它，引擎已在 `SaveableBasicTypeDefiner` 里用 `AddBasicTypeDefinition(typeof(byte), 5, ...)` 登记。

## 心智模型

把 `ByteBasicTypeSerializer` 想成存档系统为 `byte` 这条「最小整数」挂的直达通道：当 `SaveManager` 遍历对象图、碰到 `byte` 字段时，不进入对象图/引用编号流程，而是直接从类型定义取出本序列化器，执行 `writer.WriteByte((byte)value)` 落盘 1 字节；加载时对称地 `reader.ReadByte()` 还原。你从不在业务代码里 `new ByteBasicTypeSerializer`——它在 `SaveableBasicTypeDefiner.DefineBasicTypes()` 中已被登记，类型路由器自动命中这条快路径。

## 何时使用 / 何时不要使用

**不要使用（直接调用）：** 不要手动 `new` 或调用 `ByteBasicTypeSerializer`，它是 `internal` 且由存档系统托管。给 `byte` 字段加 `[SaveableField]` 即可，引擎自动走这里。

**何时实现自己的：** 只有为自定义值类型/枚举提供基本类型级序列化时，才实现 `IBasicTypeSerializer`，并在 `SaveableTypeDefiner` 子类的 `DefineBasicTypes()` 中用 `AddBasicTypeDefinition(typeof(T), saveId, new MySerializer())` 登记。`byte` 已被内置占用，勿重复登记以免 saveId 冲突。

## 依赖图

- 契约上游：[IBasicTypeSerializer](../IBasicTypeSerializer) 规定 `Serialize` / `Deserialize` / `GetSizeInBytes` 三方法。
- 选择方：[SaveManager](../SaveManager) 经 [DefinitionContext](../DefinitionContext) 的 `GetBasicTypeDefinition(typeof(byte))` 取得本序列化器。
- 实际写出：`Serialize` 调 `IWriter.WriteByte`、`Deserialize` 调 `IReader.ReadByte`；`IWriter` / `IReader` 是底层字节流接口。
- 类型定义：[BasicTypeDefinition](../BasicTypeDefinition) 把 `byte`、saveId(5) 与本序列化器绑定。
- 注册入口：[SaveableTypeDefiner](../SaveableTypeDefiner) 子类的 `DefineBasicTypes()`（见 [SaveableBasicTypeDefiner](../SaveableBasicTypeDefiner)）。
- 架构总览：[存档系统架构](../../../architecture/save-system)。

## 风险

- **忘记登记：** 自定义 `IBasicTypeSerializer` 若未在 `DefineBasicTypes()` 中 `AddBasicTypeDefinition`，`GetBasicTypeDefinition` 查不到会抛异常/断言，保存或加载失败。
- **字节数不一致：** `Serialize` 写入的字节数必须等于 `GetSizeInBytes()` 返回值；本类固定 1 字节，自定义改写写出逻辑会造成下游字段错位、整档偏移损坏。
- **拆箱类型错误：** `Serialize` 内 `(byte)value` 直接拆箱；上游传入非 `byte` 装箱值会抛 `InvalidCastException`（内置路径安全，自定义路由需注意）。

## 成员说明

- `void IBasicTypeSerializer.Serialize(IWriter writer, object value)`：拆箱成 `byte` 后调用 `writer.WriteByte((byte)value)`，写 1 字节。
- `object IBasicTypeSerializer.Deserialize(IReader reader)`：调用 `reader.ReadByte()` 读回 1 字节并以 `object` 返回。
- `int IBasicTypeSerializer.GetSizeInBytes()`：返回固定值 `1`。

## 示例

`SaveManager` 保存对象图遇到 `byte` 字段时，底层 `VariableSaveData` 取出本序列化器写入 `IWriter`：

```csharp
// SaveManager 内部按字段类型查到 ByteBasicTypeSerializer，再调用其 Serialize：
BasicTypeDefinition def = _definitionContext.GetBasicTypeDefinition(typeof(byte));
def.Serializer.Serialize(writer, fieldValue);   // 实际执行 writer.WriteByte((byte)value)
// 模组侧触发整套序列化；引擎内部会按字段类型选中本序列化器：
MetaData metaData = MetaData.CreateNew("MyMod", ApplicationVersion.FromString("e1.0.0"));
SaveManager.Save(Campaign.Current, metaData, saveName, driver); // 内部为每个 byte 字段调用本 Serialize
```

## 参见

- ↑ 父级：[存档系统 API 索引](../)
- ↔ 相关：[IBasicTypeSerializer](../IBasicTypeSerializer) · [SbyteBasicTypeSerializer](../SbyteBasicTypeSerializer) · [BasicTypeDefinition](../BasicTypeDefinition) · [SaveableTypeDefiner](../SaveableTypeDefiner) · [SaveManager](../SaveManager)
