---
title: "ISavedStruct"
description: "自定义可存档结构体的标记接口：声明该结构是否为“默认值”以跳过序列化。"
---

# ISavedStruct

> **一句话职责：** 让带 `[SaveableStruct]` 的自定义 `struct` 能告诉存档系统“我当前是默认值、可不写入”，从而缩小存档体积。

**命名空间：** `TaleWorlds.SaveSystem`
**模块：** SaveSystem
**类型：** `interface ISavedStruct`
**源文件路径：** `bannerlord-1.3.15/TaleWorlds.SaveSystem/ISavedStruct.cs`

## 概述
`struct` 在 C# 里是值类型，很多自定义向量/坐标/配置结构大部分时候都是零值。`ISavedStruct` 给这些结构体一个低成本的机会：实现 `IsDefault()`，存档系统在写入前先问一句“你是不是默认值？”——如果是，就直接跳过这个结构体，不占用存档字节。这既省空间也省加载时间，是结构体参与保存时的可选优化契约。

## 心智模型
把它想成“可折叠行李”的标签：行李（结构体）自己声明“我空着呢，别装箱”。存档系统在打包对象字段时遇到 `ISavedStruct`，会先调用 `IsDefault()`；返回 `true` 就不写这格，读取时对应字段保留默认构造值。它不是必须实现的接口——普通 `[SaveableStruct]` 结构体不实现也能正常存档，只是会始终被写出。modder 在实现自定义值类型时，加上它通常是个划算的优化。

## 何时用 / 何时不要用
当你有一个 `[SaveableStruct]` 的 `struct`，且它经常处于零值/默认状态，就实现 `ISavedStruct` 让存档跳过它。如果结构体几乎总有非零内容，或“默认构造值”与“未初始化”语义不同，就*不要*实现它，否则会丢失应保存的数据。对象（`class`）不使用此接口，对象字段的省略由引用/容器机制处理。

## 依赖图
- 上游：[SaveManager](../SaveManager)、[SaveableStruct 属性](../SaveableBasicTypeDefiner)
- 下游：[StructDefinition](../StructDefinition)、[GameData](../GameData)
- 相关类型/阶段：[ISavedStruct](../ISavedStruct)、[TypeDefinition](../TypeDefinition)

## 风险段
- 语义陷阱：`IsDefault()` 返回 `true` 时该字段在存档里完全消失，加载端会用 `default` 重建。若你的“默认构造值”并不代表“无数据”，会静默丢数据。
- 一致性：同一结构体在所有读写路径上的 `IsDefault()` 语义必须稳定，否则加载出来的对象与保存时不一致。
- 仅对 `struct` 有效：把它放在 `class` 上没有意义，结构体才走值语义的“默认即跳过”优化。

## 成员说明
- `bool IsDefault()`：核心且唯一成员。返回 `true` 表示该结构体处于默认状态、无需写入存档；返回 `false` 则正常序列化。实现时应比较所有字段是否都等于默认值（例如浮点是否都为 0）。

## 示例
```csharp
[SaveableStruct(1024)]
public struct MapPin : ISavedStruct
{
    public float X;
    public float Y;
    public bool IsDefault() => X == 0f && Y == 0f;
}
ISaveDriver driver = new InMemDriver();
SaveOutput output = SaveManager.Save(Game.Current, metaData, "mySlot", driver);
LoadResult result = SaveManager.Load("mySlot", driver);
```

## 导航
- ↑ 父级：[save-system 索引](../)
- ↔ 兄弟：[SaveableStructAttribute](../SaveableBasicTypeDefiner)、[StructDefinition](../StructDefinition)
- 架构：[存档系统架构](../../../architecture/save-system)
