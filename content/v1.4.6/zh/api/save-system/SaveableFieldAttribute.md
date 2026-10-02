---
title: "SaveableFieldAttribute"
description: "标注一个私有字段参与序列化，告诉保存系统这个字段的局部存档 id 是什么。"
---
# SaveableFieldAttribute

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class SaveableFieldAttribute : Attribute`
**Base:** `System.Attribute`
**Source:** `TaleWorlds.SaveSystem/SaveableFieldAttribute.cs`

## 概述

这是一个纯元数据特性，只有一个构造函数和一个可写属性，整份源码不到二十行。它唯一的作用是告诉 `TaleWorlds.SaveSystem` 的类型定义层：「这个字段要进存档，它在本类型内的局部编号是 N」。保存系统本身不读字段值，只读这个编号；真正决定「这个类型值怎么写进字节流」的是同一程序集里对应的 `SaveableTypeDefiner` 子类。也就是说，`[SaveableField]` 和 definer 是**成对**的：只有特性没有 definer 定义，`SaveManager.CheckSaveableTypes()` 就会把这个字段的类型列进缺失清单。

它只能贴在字段上（`AttributeTargets.Field`），属性要用 [SaveablePropertyAttribute](../SaveablePropertyAttribute)。字段可以是 `private`——游戏自己的 `Game._nextUniqueTroopSeed` 就是 `[SaveableField(11)] private int`，可见性不是限制条件。

## 心智模型

把它当成「存档格式的第 N 号插槽声明」就对了。整个模型是三层：

1. **局部编号（LocalSaveId）**——本类型内部字段的槽位号，`short` 范围。它的作用域是**声明它的那个类**，不是全局；不同类型都用 `[SaveableField(1)]` 完全没问题。
2. **类型定义（TypeDefinition）**——由 [SaveableTypeDefiner](../SaveableTypeDefiner) 的 `AddClassDefinition(typeof(YourType), 100)` 建立，把「槽位号 → 字段名」固定下来。
3. **序列化格式**——1.4.6 里写死 `CurrentVersion = 1`，字段的读写最终走 `SaveManager.Save(object, MetaData, string, ISaveDriver)` / `SaveManager.Load(...)` 这条路径（`ISaveDriver` 只管存档文件与存档名），按 `LocalSaveId` 取字段的逻辑在存档系统内部，并没有对外的「按类型序列化器」接口。

典型顺序：给字段加特性 → 在 definer 里登记这个类型 → 确认该字段的类型本身也有 definer（否则存的是引用 id 也会失败）。

常见误用有四个。最常见的是**改了已有字段的 LocalSaveId**：老档里按旧编号读，读出来的是另一个字段的值，类型对得上就静默错乱，对不上才报错。其次是**复用已退役的编号**：删掉字段 5 又把新字段编成 5，旧档加载时会把新字段读成旧值。第三是**在没写 definer 的类型上加特性**，保存直接失败或坏档。第四是**用 `[SaveableField]` 标注集合或字典**：这两者需要额外的容器定义，标了也不会自动获得正确的序列化。

## 关键成员

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `.ctor` | `public SaveableFieldAttribute(short localSaveId)` | 唯一构造函数，把传入的槽位号写进 `LocalSaveId`。特性参数在语法上是常量，所以 `localSaveId` 必须是编译期常量，不能拼接。 |
| `LocalSaveId` | `public short LocalSaveId { get; set; }` | 本类型内部的字段槽位号。保存系统按这个号寻址，而不是按字段名——**改名安全，改号不安全**。 |

## 真实示例

一个 mod 自定义的可保存类型，字段 + definer 成对出现：

```csharp
public class MyLedgerEntry
{
    [SaveableField(0)]
    public int MerchantId;

    [SaveableField(1)]
    public int CoinAmount;

    [SaveableField(2)]
    public bool Settled;
}

public class MyLedgerDefiner : SaveableTypeDefiner
{
    public MyLedgerDefiner() : base(20000) { }

    protected override void DefineClassTypes()
    {
        AddClassDefinition(typeof(MyLedgerEntry), 1);
    }
}
```

只加特性、不补 definer 时，诊断入口会直接把它列出来：

```csharp
SaveManager.InitializeGlobalDefinitionContext();
List<Type> missing = SaveManager.CheckSaveableTypes();
if (missing.Contains(typeof(MyLedgerEntry)))
{
    Debug.Print("MyLedgerEntry 缺少 SaveableTypeDefiner 定义", 0);
}
```

## 风险与边界

- **编号即 ABI。** `LocalSaveId` 直接写进存档字节。改号、复用退役编号、在中间插入新字段却不重排后续编号，都会让旧档错位。正确做法是只追加、只从尾部取新号。
- **`short` 上限。** 槽位号是 `short`，单个类型超过 32767 个存档成员不可能，但要注意编号计算不要溢出。
- **必须有配套 definer。** 特性只声明「有这个槽位」，不定义类型本身。缺 definer 时 `SaveManager.CheckSaveableTypes()` 会报出来，`Save` 会因 `DefinitionContext.GotError` 直接返回失败。
- **不适用于集合/字典。** `List<T>`、`Dictionary<K,V>` 这类字段要靠 `SaveableTypeDefiner.AddContainerDefinition` 或泛型定义，单独贴特性不会生效。
- **不适用于属性。** C# 允许给属性贴任何 Attribute，但保存系统只对带 `[SaveableProperty]` 的 `PropertyInfo` 生效，这个特性会被静默忽略。
- **`SaveManager.CheckSaveableTypes()` 遍历全 AppDomain**，是启动期诊断工具，别放进每帧 tick。

## 跨版本提示

`bannerlord-1.3.15/` 与 `bannerlord-1.4.6/` 的 `TaleWorlds.SaveSystem/SaveableFieldAttribute.cs` 逐行比对，**public 表面完全一致**：`AttributeUsage(AttributeTargets.Field)`、`LocalSaveId { get; set; }`、单参构造函数都没变。`bannerlord-1.4.5/` 在本机没有解出 C# 源码，这一档我没能实际核对。

## 依赖关系

- 配套定义：[SaveableTypeDefiner](../SaveableTypeDefiner) 提供类型级 saveId
- 属性版本：[SaveablePropertyAttribute](../SaveablePropertyAttribute) 贴在 `PropertyInfo` 上
- 消费方：[SaveManager](../SaveManager) 的 `CheckSaveableTypes()` / `Save(...)` 会按这些槽位号序列化

- 上一级：[v1.4.6 内容根](../../../)
