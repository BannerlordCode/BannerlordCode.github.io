---
title: "MBList"
description: "TaleWorlds.Library 的泛型列表容器：派生自 MBReadOnlyList（后者又派生自 List），自己不声明任何成员，全部价值在四个构造器与 ToMBList 扩展方法。"
---

# MBList

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class MBList<T> : MBReadOnlyList<T>`
**Base:** `TaleWorlds.Library.MBReadOnlyList<T>` → `System.Collections.Generic.List<T>`
**File:** `TaleWorlds.Library/MBList.cs`

## 概述

32 行，一个类头，四个构造器，**零个自有成员**。全部行为都来自基类链条：`MBList<T>` → `MBReadOnlyList<T>` → `List<T>`。名字里那个「ReadOnly」是误导——`MBReadOnlyList<T>` 只是 `public class MBReadOnlyList<T> : List<T>` 加三个构造器，**没有覆盖任何修改方法**，也就是说从 `MBReadOnlyList<T>` 引用上调 `Add` / `Remove` / `Clear` 一样能改。

它真正的存在理由有两个。第一，**给 `TaleWorlds.Library` 一个游戏内部惯用的列表名义类型**，让内部集合在签名里统一显示成 `MBList<T>` 而不是 `List<T>`。第二，**配合 `TaleWorlds.Library.Extensions` 里的 `ToMBList` 扩展方法**——三个重载分别接收 `T[]` / `List<T>` / `IEnumerable<T>`，把任意序列一次性转成预分配容量的 `MBList<T>`。

注意它跟 `IReadOnlyList<T>` 没关系，也跟「不可变」没关系：游戏内部大量 API 返回类型写的是 `MBReadOnlyList<T>`（例如 `ItemObject.Weapons`、`ItemModifierGroup.ItemModifiers`），拿到的对象实际是 `MBList<T>`，**照样能改**。

## 心智模型

判断要不要用它，答案分三档：

1. **接别人的只读列表** —— 不用 `MBList`。接口参数写成 `IEnumerable<T>` 或 `IReadOnlyList<T>`，实现细节归实现方。你硬要求 `MBList<T>` 就等于把调用方绑死在一个游戏内部类型上。
2. **构造内部集合** —— 用 `new MBList<T>(capacity)`。游戏内部大量集合字段是这样初始化的，`ItemModifierGroup._itemModifiers` 与 `WeaponComponent._weaponList` 都是 `new MBList<...>()`，靠 `Add` 逐个填。
3. **转换任意序列** —— 用 `ToMBList()`。三个重载里 `IEnumerable<T>` 那个会先做两次类型判定：命中 `T[]` 走数组重载（容量 = `Length`），命中 `List<T>` 走列表重载（容量 = `Count`），否则退化成 `new MBList<T>()` 无预分配再 `AddRange`。所以**传 `List<T>` 比传一个惰性序列快**，容量一次到位、避免 `AddRange` 期间的扩容。

`MBGameModel` 那条链上还有一个常见用法：`GameModelsManager` 的构造把 `IEnumerable<GameModel>` 参数交给 `inputComponents.ToMBList<GameModel>()`，然后存进 `private readonly MBList<GameModel> _gameModels`。而 `GetGameModels()` 返回的声明类型是 `MBReadOnlyList<GameModel>`——**实际对象是 `MBList<GameModel>`，调用方可以强转回去改**。这是「只读类型名」在本项目里的一次真实泄漏。

## 关键成员

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `.ctor()` | `public MBList()` | 无参构造，容量 0。等价于 `new List<T>()`。 |
| `.ctor(int capacity)` | `public MBList(int capacity)` | 预分配容量，转发给 `base(capacity)`。**内部集合字段的推荐写法**，避免逐个 `Add` 时的多次扩容。 |
| `.ctor(IEnumerable<T> collection)` | `public MBList(IEnumerable<T> collection)` | 从任意序列构造，转发给 `MBReadOnlyList(IEnumerable<T>)`。**不预分配**——`List<T>` 的集合构造内部就是 `AddRange`，容量按需增长。 |
| `.ctor(List<T> collection)` | `public MBList(List<T> collection)` | 从 `List<T>` 构造。与上一个重载**在类型层面就区分开**：参数是 `List<T>` 时命中这一条，编译器选它；传 `IEnumerable<T>` 静态类型的变量会命中上一个。 |
| 继承而来 | `Add` / `Remove` / `Clear` / `Count` / 索引器 / 枚举器 | 全部来自 `List<T>`。**没有任何只读约束。** |
| 配套扩展 | `ToMBList<T>(this T[])` / `ToMBList<T>(this List<T>)` / `ToMBList<T>(this IEnumerable<T>)`（`TaleWorlds.Library.Extensions`） | 三个重载把序列转成 `MBList<T>`。前两个按长度 / 计数预分配容量，第三个先做类型判定再转发。 |

## 怎么用

### 怎么拿到它

`MBList<T>` 是 `public class MBList<T> : MBReadOnlyList<T>`（`TaleWorlds.Library/MBList.cs:7`），全文 33 行、四个构造器：`MBList()`（`:10`）、`MBList(int capacity)`（`:15`）、`MBList(IEnumerable<T> collection)`（`:21`）、`MBList(List<T> collection)`（`:27`），每个都 `: base(...)` 转给基类。

**先破一个名字误会：它不是只读列表。** 基类 `MBReadOnlyList<T>` 的声明是 `public class MBReadOnlyList<T> : List<T>`（`TaleWorlds.Library/MBReadOnlyList.cs:7`），而它的三个构造器（`:10`、`:15`、`:21`）同样只是转给 `List<T>`。所以整条继承链是 `MBList<T> → MBReadOnlyList<T> → List<T>`——`Add` / `Remove` / `Clear` / 索引器全部可用。`MBList.cs` 里一个方法都没声明，公开成员表上只有那四个构造器不代表它不可写。

那它存在的意义是什么？**存档系统按类型名特判它**：`TaleWorlds.SaveSystem/Definition/DefinitionContext.cs:444` 为 `typeof(MBList<>).MakeGenericType(...)` 注册 `ContainerType.CustomList`，`TaleWorlds.SaveSystem/TypeExtensions.cs:34` 用 `genericTypeDefinition == typeof(MBList<>)` 识别，`TaleWorlds.SaveSystem/Load/LoadContext.cs:302` 在反序列化时用 `Activator.CreateInstance(typeof(MBList<>))...` 造目标（`TaleWorlds.SaveSystem/Load/ContainerHeaderLoadData.cs:70`）。引擎 API 也一律用它作返回类型，例如 `public MBList<Hero> Children`（`Hero.cs:1739`）。

### 典型用法

```csharp
using TaleWorlds.Library;
using System.Collections.Generic;

// 存档字段声明成 MBList，序列化器才认
public MBList<int> Scores = new MBList<int>();                  // MBList.cs:10
public MBList<string> Tags = new MBList<string>(capacity: 8);    // :15
public MBList<Hero> Members = new MBList<Hero>(sourceList);      // :21，List<T> 的拷贝语义，元素是复制而非共享引用

// 可写：Add/Remove/索引器全部来自 List<T>（MBReadOnlyList.cs:7）
Members.Add(newHero);
int n = Members.Count;

// 引擎返回的就是 MBList，直接接
MBList<Hero> siblings = hero.Children;                           // Hero.cs:1739

// 向上转型成 List<T> 也合法（因为基类链）
List<Hero> asPlain = Members;
```

### 最容易踩的坑

**给存档字段声明成 `List<T>`，然后发现读档后数据全丢。** 序列化器是在 `typeof(MBList<>)` 上特判的（`TaleWorlds.SaveSystem/Definition/DefinitionContext.cs:444`、`TaleWorlds.SaveSystem/TypeExtensions.cs:34`），读档侧也是拿 `typeof(MBList<>)` 反射造实例（`TaleWorlds.SaveSystem/Load/LoadContext.cs:302`、`TaleWorlds.SaveSystem/Load/ContainerHeaderLoadData.cs:70`）。声明成 `List<T>` 编译能过、运行期不报错，但存档里就是没有这个字段——**症状是读档后它回到字段初始值，而不是你存进去的值**，而且只在真正读一次旧存档时才暴露。模组里凡是标了 `[SaveableField]` / `[SaveableProperty]` 的集合字段，必须是 `MBList<T>`。

第二个坑是**因为名字而误判可写性**：看到 `MBReadOnlyList<Hero>` 作为静态类型（`MBObjectManager.GetObjectTypeList<T>()` 返回的就是它，`MBObjectManager.cs:473`）就以为不能 `Add`，于是绕道去改源集合——而实际上 `MBReadOnlyList<T>` 的 setter 能力一路继承自 `List<T>`，强转一下就能改。判断可写性要看**实际继承链**，不要看类名。

## 真实示例

内部集合字段的标准写法（预分配容量，然后逐个填充）：

```csharp
using System.Collections.Generic;
using TaleWorlds.Core;
using TaleWorlds.Library;

// 读者侧演示组件，不是游戏 API；以下方法仅示意调用形状
public class MyModifierRegistry
{
    private readonly MBList<ItemModifier> _mods = new MBList<ItemModifier>(16);

    public void Add(ItemModifier modifier)
    {
        _mods.Add(modifier);
    }

    public int Count
    {
        get { return _mods.Count; }
    }

    public MBReadOnlyList<ItemModifier> All
    {
        get { return _mods; }
    }
}
```

从数组或列表转换（两条路径都会预分配容量）：

<!-- xml-id-unverifiable: v1.4.6 -->
> ⚠️ 不可验证：本页全部字符串 id（下方代码示例中的）在 v1.4.6 源码树均无法核对——该版本未随附 XML 语料。
```csharp
using System.Collections.Generic;
using TaleWorlds.Core;
using TaleWorlds.Library;

WeaponComponentData[] designs = new WeaponComponentData[3];
MBList<WeaponComponentData> fromArray = designs.ToMBList();

List<ItemModifier> loaded = new List<ItemModifier>();
loaded.Add(MBObjectManager.Instance.GetObject<ItemModifier>("fine_sword_modifier"));
MBList<ItemModifier> fromList = loaded.ToMBList();

Debug.Print("fromArray.Count=" + fromArray.Count, 0);
Debug.Print("fromList.Count=" + fromList.Count, 0);
```

惰性序列走的是无预分配路径（会多一次扩容），需要频繁转换时优先传 `List<T>`：

```csharp
using System.Collections.Generic;
using System.Linq;
using TaleWorlds.Core;
using TaleWorlds.Library;

IEnumerable<ItemModifier> lazy = MBObjectManager.Instance
    .GetObjectTypeList<ItemModifier>()
    .Where(delegate(ItemModifier m) { return m.ItemQuality == ItemQuality.Fine; });

MBList<ItemModifier> converted = lazy.ToMBList();

int beneficial = 0;
for (int i = 0; i < converted.Count; i++)
{
    if (converted[i].IsBeneficial())
    {
        beneficial++;
    }
}

Debug.Print("fine modifiers=" + converted.Count + " beneficial=" + beneficial, 0);
```

## 风险与边界

- **名字里的「ReadOnly」没有任何强制力。** `MBReadOnlyList<T> : List<T>`，没有覆盖 `Add` / `Remove` / `Clear`。声明成 `MBReadOnlyList<T>` 的属性拿到手后可以被改，**不要把它当不可变集合**。真的想要只读语义得自己套 `AsReadOnly()`。
- **`MBList<T>` 自身零成员。** 它加不了任何新行为，所有价值在「这是个游戏内部惯用集合类型」这件事上。写自己的代码时不要继承它——你会继承一整条 `List<T>` 的可变语义却什么也没约束。
- **两个序列构造重载的坑。** `MBList(List<T>)` 与 `MBList(IEnumerable<T>)` 并存。传 `List<T>` 静态类型的变量命中前者，传 `IEnumerable<T>` 静态类型的变量命中后者。两者功能相同（都不预分配），但如果你自己定义了 `IEnumerable<T>` 的实现，重载决议可能落在你不预期的那条上。
- **惰性枚举走 `IEnumerable` 重载会多扩容。** `ToMBList<T>(IEnumerable<T>)` 对非数组非列表的输入用 `new MBList<T>()` 无容量构造再 `AddRange`。热路径上反复转换要注意。
- **不要在签名里对外暴露 `MBList<T>`。** 它是 `TaleWorlds.Library` 的内部实现类型。对外签名用 `IEnumerable<T>` / `IReadOnlyList<T>` / 自己的集合，未来游戏升级改名时你不会跟着碎。
- **返回 `MBReadOnlyList<T>` 不代表调用方不能改。** `ItemObject.Weapons` / `ItemModifierGroup.ItemModifiers` / `GameModelsManager.GetGameModels()` 全部如此。**别在下游偷偷强转回 `MBList<T>` 再改**，那是绕过上游意图。
- **版本之间稳定。** 这个类型在多个小版本里形状没变，依赖它风险低于依赖内部工具类，但仍是内部类型。

## 依赖关系

- 基类：`TaleWorlds.Library.MBReadOnlyList<T>`（只提供三个构造器，其余全是 `List<T>` 转发）
- 实际行为来源：`System.Collections.Generic.List<T>`，`MBList` 未覆盖任何成员
- 配套扩展：`TaleWorlds.Library.Extensions.ToMBList` 的三个重载，是它最主要的来源
- 典型内部用法：[ItemModifierGroup](../ItemModifierGroup) 的 `_itemModifiers` 是 `private readonly MBList<ItemModifier>`，通过 `MBReadOnlyList<ItemModifier> ItemModifiers` 暴露
- 典型内部用法：[WeaponComponent](../WeaponComponent) 的 `_weaponList` 是 `private readonly MBList<WeaponComponentData>`，通过 `MBReadOnlyList<WeaponComponentData> Weapons` 与 `PrimaryWeapon` 暴露
- 典型内部用法：[GameModelsManager](../GameModelsManager) 构造时 `ToMBList<GameModel>()`，通过 `MBReadOnlyList<GameModel> GetGameModels()` 暴露
- 典型内部用法：[ItemObject](../ItemObject) 的 `Weapons` 声明类型是 `MBReadOnlyList<WeaponComponentData>`
- 转换链：[IGameStarter](../IGameStarter) 的 `Models` 返回 `IEnumerable<GameModel>`，正是 `ToMBList` 的输入
- 模块地图：[module-map](../../../architecture/module-map)
- 桶首页：[core-extra API 分区](../)

## 导航

- 同桶：[`../GameModelsManager`](../GameModelsManager) · [`../WeaponComponentData`](../WeaponComponentData) · [`../ItemObject`](../ItemObject)
- 父索引：[`../_index`](../_index)
