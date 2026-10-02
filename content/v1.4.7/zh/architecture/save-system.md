---
title: "存档系统 — 自定义数据的持久化"
description: "v1.4.7 的 SaveManager / SaveableTypeDefiner 如何注册类型、SaveContext 与 LoadContext 的生命周期，以及 CampaignBehaviorBase.SyncData 与全局保存的区别。"
---
# 存档系统 — 自定义数据的持久化

## 心智模型

Bannerlord 有**两套**互不相通的持久化机制，选错就是存档里字段丢失：

| 机制 | 用来存什么 | 入口 | 什么时候跑 |
| --- | --- | --- | --- |
| **行为同步（轻）** | 一个 `CampaignBehaviorBase` 子类的实例字段 | `IDataStore` / `SyncData` | 战役开始与结束时 |
| **全局保存系统（重）** | 任意类型图，跨战役、跨模组、带类型 ID 与冲突解决 | `SaveManager` + `SaveableTypeDefiner` | 游戏自己决定保存时机 |

**默认用第一套。** 只有当数据不属于任何行为、需要在战役之外存活，或者需要与别的模组共享时，
才动第二套。

## 轻量路径：SyncData

```csharp
public class MyCampaignBehavior : CampaignBehaviorBase
{
    private int _kills;
    private bool _recruitedGuide;
    private string _lastBannerName = "";

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("kills", ref _kills);
        dataStore.SyncData("recruitedGuide", ref _recruitedGuide);
        dataStore.SyncData("lastBannerName", ref _lastBannerName);
    }
}
```

规则：

- 键名用 `nameof` 或常量，不要用会改的字符串字面量 —— 改名等于丢数据。
- `ref` 参数的类型受存档格式限制：`bool`、`int`、`float`、`string`、枚举都安全；
  自定义类引用不行，需要序列化成 `string` 或 `int` 索引。
- **读档时序不稳定。** `SyncData` 在反序列化阶段调用，此时别的行为可能还没恢复完。
  依赖别人的状态，等 `OnAfterGameLoaded`。

## 重路径：SaveableTypeDefiner + SaveManager

### 两个上下文分工

| 类型 | 命名空间 | 角色 |
| --- | --- | --- |
| `SaveContext` | `TaleWorlds.SaveSystem.Save` | 写入端。遍历对象图，调用你的 `FillSaveableChildren` / `Write` |
| `LoadContext` | `TaleWorlds.SaveSystem.Load` | 读取端。按类型 ID 重建对象并回填字段 |
| `SaveManager` | `TaleWorlds.SaveSystem` | 静态门面，`Save` / `Load` / `LoadMetaData` |
| `ISaveDriver` | `TaleWorlds.SaveSystem` | 抽象文件后端（本地文件、内存、云端） |

`SaveManager` 的 public 表面很小，值得记住的就这些：

```csharp
public static void   InitializeGlobalDefinitionContext();
public static List<Type> CheckSaveableTypes();
public static SaveOutput Save(object target, MetaData metaData, string saveName, ISaveDriver driver);
public static MetaData  LoadMetaData(string saveName, ISaveDriver driver);
public static LoadResult Load(string saveName, ISaveDriver driver);
public static LoadResult Load(string saveName, ISaveDriver driver, bool loadAsLateInitialize);
public const string SaveFileExtension = ".sav";
```

`LoadMetaData` 只读元数据不建对象。**迁移代码应该先 `LoadMetaData` 判断版本，再决定怎么读**，
而不是靠读档时的异常。

### 注册类型：SaveableTypeDefiner

保存系统靠**数字类型 ID** 索引类型，所以每个要保存的类型必须显式注册，且 ID 在所有模组之间唯一。
`SaveableTypeDefiner` 提供 24 个 protected 方法，按声明种类分组：

| 分组 | 方法 |
| --- | --- |
| 基础类型 | `AddBasicTypeDefinition(Type, int saveId, IBasicTypeSerializer)` |
| 类 | `AddClassDefinition(Type, int, IObjectResolver)` · `AddClassDefinitionWithCustomFields(Type, int, IEnumerable<Tuple<string, short>>, IObjectResolver)` |
| 根对象 | `AddRootClassDefinition(Type, int, IObjectResolver)` |
| 结构体 | `AddStructDefinition(Type, int, IObjectResolver)` · `AddStructDefinitionWithCustomFields(...)` |
| 接口 | `AddInterfaceDefinition(Type, int)` |
| 枚举 | `AddEnumDefinition(Type, int, IEnumResolver)` |
| 冲突解决 | `AddConflictResolver(int saveId, IConflictResolver)` |
| 泛型 / 容器 | `ConstructGenericClassDefinition(Type)` · `ConstructGenericStructDefinition(Type)` · `ConstructContainerDefinition(Type)` |

分组的虚函数是 `DefineBasicTypes()`、`DefineClassTypes()`、`DefineStructTypes()`、
`DefineInterfaceTypes()`、`DefineEnumTypes()`、`DefineRootClassTypes()`、
`DefineConflictResolvers()`、`DefineGenericClassDefinitions()`、
`DefineGenericStructDefinitions()`、`DefineContainerDefinitions()`。覆写对应的那个，把类型加进去。

```csharp
public class MySaveableDefiner : SaveableTypeDefiner
{
    // saveBaseId 必须落在自己的号段里，和游戏本体及其他模组不重叠
    public MySaveableDefiner() : base(20000) { }

    protected override void DefineClassTypes()
    {
        AddClassDefinition(typeof(MyCustomData), 20001);
    }

    protected override void DefineStructTypes()
    {
        AddStructDefinition(typeof(MyCustomStat), 20002);
    }
}
```

### saveId 冲突是最常见的事故

两个模组选了同一个 ID，读档时其中一个会被静默解析成另一个类型，症状是存档内容"莫名其妙变了"。
`SaveManager.ShouldResolveConflicts()` 和 `CheckSaveableTypes()` 存在就是为了在加载期把这个问题
暴露出来 —— **在开发期就调一次这两个方法**，比在用户存档上排查便宜得多。

## 决策流程

```text
数据只在一个 CampaignBehavior 里用？
  └─ 是 → SyncData（99% 的情况）
  └─ 否 ↓
需要跨战役 / 跨模组 / 存整个对象图？
  └─ 是 → SaveableTypeDefiner + SaveManager
  └─ 否 → 再想想 SyncData 能不能扛；SyncData 只是要求字段类型简单，不要求逻辑简单
```

## 参见

- ↔ [架构总览](../) · [模块系统](../module-system) —— 行为怎么被注册进来
- ↘ [界面栈](../ui-stack)
- ↑ `api/save-system/` 与 `api/campaign-ext/` 都没有桶索引页。`api/save-system/` 根本没有英文目录，它的三个页面（`SaveManager`、`SaveContext`、`LoadContext`）只有中文版；`api/campaign-ext/` 只有两个手写英文页面 `MBObjectBase` 与 `MBObjectManager`。见 [缺口清单](../../../GAPS)。