---
title: "SaveablePropertyAttribute"
description: "标注一个属性参与序列化，告诉保存系统这个属性在本类型内的局部存档 id。"
---
# SaveablePropertyAttribute

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class SaveablePropertyAttribute : Attribute`
**Base:** `System.Attribute`
**Source:** `TaleWorlds.SaveSystem/SaveablePropertyAttribute.cs`

## 概述

和 [SaveableFieldAttribute](../SaveableFieldAttribute) 是一对孪生特性：结构完全对称，唯一区别是 `AttributeUsage` 从 `AttributeTargets.Field` 换成 `AttributeTargets.Property`。它同样只有一个构造函数（`short localSaveId`）和一个可写属性 `LocalSaveId`，源码二十行。

游戏自己大量依赖它，因为 C# 属性是最容易做「读写分离 + 计算缓存」的地方。1.4.6 的 `Game` 里 `GameType` 是 `[SaveableProperty(3)]`、`PlayerTroop` 是 `[SaveableProperty(8)]`，`TextObject.Attributes` 是 `[SaveableProperty(2)]`——都是 `private set` 的公开属性。

保存系统在收集成员时是**字段和属性两条路并行扫描**的：字段看 `[SaveableField]`，属性看 `[SaveableProperty]`，两者都读 `LocalSaveId` 当槽位号。

## 心智模型

理解方式是「存档按序号读，不按名字读」。同一类型内，槽位号唯一决定存档字节里第几个位置。因此：

- 属性**改名**是安全的（存档不存名字），**改 `LocalSaveId` 是灾难性的**。
- 属性的 getter/setter 副作用会在序列化过程中真的被执行——如果你在 getter 里做懒加载或 `Debug.Print`，加载时它会跑。
- `private set` 的属性照样能存档：保存系统用 `PropertyInfo` 反射，不看 setter 可见性。1.4.6 的 `Game.GameType` 就是 `public GameType GameType { get; private set; }`。
- 标在索引器或静态属性上没意义：扫描用的是 `BindingFlags.Instance | Public | NonPublic`，索引器会被 `GetProperties` 收进来但无法定位槽位。

常见误用：给一个每次 get 都重新计算的对象属性加特性（存档体积和加载开销暴涨）；把「派生值」也标上（与源字段重复存两份，还可能不一致）；以及**只贴特性不写 definer**——`SaveManager.CheckSaveableTypes()` 会把该属性的类型列进缺失清单。

## 关键成员

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `.ctor` | `public SaveablePropertyAttribute(short localSaveId)` | 唯一构造函数，把槽位号写进 `LocalSaveId`。因为是特性参数，必须是编译期常量。 |
| `LocalSaveId` | `public short LocalSaveId { get; set; }` | 本类型内部的属性槽位号。作用域是声明它的那个类，不同类可以各自从 0 开始。 |

## 真实示例

1.4.6 里 `Game` 自身的写法就是范本——公开读、私有写：

```csharp
[SaveableProperty(3)]
public GameType GameType { get; private set; }

[SaveableProperty(8)]
public BasicCharacterObject PlayerTroop { get; set; }
```

mod 自定义类型同样如此，属性和字段可以混用，槽位号互不干扰：

```csharp
public class MyTradeContract
{
    [SaveableProperty(0)]
    public string TownId { get; set; }

    [SaveableField(1)]
    public int AgreedGold;

    [SaveableProperty(2)]
    public bool IsActive { get; private set; }
}
```

贴了但没登记类型时，用诊断入口查出来：

```csharp
SaveManager.InitializeGlobalDefinitionContext();
foreach (Type t in SaveManager.CheckSaveableTypes())
{
    if (t == typeof(MyTradeContract))
    {
        Debug.Print("MyTradeContract 需要一个 SaveableTypeDefiner", 0);
    }
}
```

## 风险与边界

- **编号即 ABI，改名安全改号不安全。** 与字段特性完全同一条规则：只追加、只从尾部取号，退役的号不要再用。
- **getter 副作用会被触发。** 反序列化时保存系统会调用 setter，重建时可能调用 getter。把 `Debug.Print`、懒加载、事件触发写进属性访问器里会产生难查的加载期 bug。
- **必须有配套 definer。** 特性声明槽位，definer 定义类型。缺一不可，否则 [SaveManager](../SaveManager) 的 `Save` 会因定义错误直接失败。
- **派生属性不要存档。** 能由其它存档字段算出来的值，存进档里等于制造两个真相来源。
- **类型受限。** 标在 `object` 或接口类型的属性上，保存系统会走引用寻址，必须保证那个类型有 `AddRootClassDefinition` 或可复用的对象定义。
- **不适用于集合。** `List<T>` / `Dictionary<K,V>` 属性同样需要额外的容器定义，贴特性本身不解决问题。

## 跨版本提示

`bannerlord-1.3.15/` 与 `bannerlord-1.4.6/` 的 `TaleWorlds.SaveSystem/SaveablePropertyAttribute.cs` 逐行比对，**public 表面完全一致**：`AttributeTargets.Property`、`LocalSaveId { get; set; }`、单参构造函数。

**1.4.5 侧结论**：打开 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/SaveablePropertyAttribute.cs`（15 行）与 `bannerlord-1.4.6/TaleWorlds.SaveSystem/SaveablePropertyAttribute.cs`（21 行）逐成员比对 public/protected 表面。**三版 public 表面完全一致（1 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。1.4.5 是 15 行、1.4.6 是 21 行。

**为什么这份源码之前被判为「不存在」**：`bannerlord-1.4.5/` 的 C# 源码在 `Bannerlord.Source/bin/` 下**双层嵌套** `bin/<Assembly>/<Assembly>/<Type>.cs`，而 `bin/` 的一层里没有任何 `.cs`（实测 `find bannerlord-1.4.5/Bannerlord.Source/bin -maxdepth 1 -name "*.cs"` 命中 0），只扫一层就会误判成无源码。**1.4.5 是原始源码形态**（file-scoped namespace、无 `// Token:` 注释），1.4.6 与 1.3.15 是反编译产物，所以两边的行数不可直接比大小。

## 依赖关系

- 字段版本：[SaveableFieldAttribute](../SaveableFieldAttribute) 贴在 `FieldInfo` 上，槽位号体系相同
- 配套定义：[SaveableTypeDefiner](../SaveableTypeDefiner) 建立类型的槽位表
- 消费方：[SaveManager](../SaveManager) 的 `CheckSaveableTypes()` 扫描属性上的特性

- 上一级：[v1.4.6 内容根](../../../)
