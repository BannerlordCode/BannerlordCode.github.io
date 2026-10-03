---
title: "读写存档（把自定义数据存进战役存档）"
description: "开发者视角总览：Bannerlord 存档是带 id 的对象图——SaveableClass/SaveableField 标记、SaveableTypeDefiner 注册、ISaveDriver 落盘，以及版本迁移为什么是必须提前做的决定。"
extra:
  sidebar: auto
---

# 读写存档（把自定义数据存进战役存档）

> **这条路径解决什么**：你给 mod 加了自定义字段（计数、标记、状态），
> 要让它们跟着战役存档一起存下来、读档后还在，并且未来升级游戏时不会炸掉旧档。

## 心智模型：存档存的是「带 id 的对象图」，不是「字段快照」

这是本条路径唯一需要真正理解的一件事。

```text
你的类（打了 [SaveableClass(12345)]）
  └─ 字段（打了 [SaveableField(1)]）
        └─ 引用到别的打了标记的类 → 自动跟随，一起进图
              └─ 引用到没打标记的类 → 跳过或报错
```

三个后果，每一个都是常见 bug 的来源：

1. **能不能存，取决于有没有打标记，不取决于你继承了什么。**
   没打 `[SaveableClass]` 的类哪怕字段是 `public`，也不会进存档。
2. **id 是存档格式的一部分。**
   `[SaveableClass(12345)]` 里的 12345 会写进 `.sav` 文件。
   改了它 = 旧档里你的数据全丢。id 在同一个定义上下文里必须唯一。
3. **对象图是递归跟随的。** 你引用了一个没打标记的对象，要么它被跳过（数据静默丢失），
   要么整个保存报错。表现都是「我明明存了但读档没了」。

## 下钻路径

| 步骤 | 做什么 | 打开 |
| --- | --- | --- |
| 1 | 读完整心智模型与三个核心问题 | [存档系统](../../v1.3.15/zh/architecture/save-system) |
| 2 | 照着写一个可存档的类（含嵌套与根类） | [存档指南](../../v1.3.15/zh/guide/save-system-guide) |
| 3 | 知道类型定义器怎么注册你的类 | [SaveableTypeDefiner](../../v1.3.15/zh/api/save-system/SaveableTypeDefiner) |
| 4 | 保存与加载的驱动面 | [SaveManager](../../v1.3.15/zh/api/save-system/SaveManager) · [ISaveDriver](../../v1.3.15/zh/api/save-system/ISaveDriver) |
| 5 | 保存期间拿到的上下文对象 | [SaveContext](../../v1.5.3/zh/api/save-system/SaveContext) |
| 6 | 行为里加了字段 → 这里就是它的进档路径 | [加一个 CampaignBehavior](../task-campaign-behavior) |
| 7 | 跨版本读旧档 | [从 1.4.5 迁移到 1.5.3](../../v1.5.3/zh/architecture/migration-from-1.4.5) · [版本差异](../../v1.3.15/zh/architecture/version-delta) |

## 关键类型就这几个

- [SaveableTypeDefiner](../../v1.3.15/zh/api/save-system/SaveableTypeDefiner) —— **注册你的类**。
  忘了这一步，打了标记也不会被定义器知道。
- [SaveManager](../../v1.3.15/zh/api/save-system/SaveManager) —— 保存/加载的入口面。
- [ISaveDriver](../../v1.3.15/zh/api/save-system/ISaveDriver) —— **落盘策略**。
  游戏内默认实现把 `GameData` 压成 `.sav` ZIP；换驱动就是换存储后端。
- [SaveContext](../../v1.5.3/zh/api/save-system/SaveContext) —— 保存/加载过程中的上下文。
  需要更细的类型定义信息时看它（该页在 v1.5.3 树）。

## 用什么标记存

| 属性 | 用途 | 注意 |
| --- | --- | --- |
| `[SaveableRootClass(id)]` | 根对象，一次保存只有一个根 | 例如 `Campaign`，或你自己的全局状态 |
| `[SaveableClass(id)]` | 普通可存档类 | id 在同一定义上下文中唯一 |
| `[SaveableField(id)]` | 可存档字段 | id 在类内唯一 |
| `[SaveableProperty(id)]` | 可存档属性 | 需要可访问的 getter/setter |

## 你要注意什么

- **id 一旦发布就不能随便改。** 它是存档格式的一部分，不是装饰。
  要改结构就加新字段、把旧的留空。
- **「存了但读档没了」按这个顺序查：**
  1. 类打了 `[SaveableClass]` 吗？
  2. 字段打了 `[SaveableField]` 吗？
  3. 在 `SaveableTypeDefiner` 里注册了吗？
  4. 字段类型（引用的类）自身可存档吗？
- **加载阶段是晚的。** 存档加载完成前，依赖存档数据构造的对象拿不到值。
  读档路径上不要在构造函数里依赖存档字段。
- **跨版本存档兼容是主动决策，不是自动的。** 游戏不会替你迁移你自己类的结构变化。
  游戏自身的兼容边界见 [版本差异](../../v1.3.15/zh/architecture/version-delta)。
- **别把存档当配置。** 存档是运行时状态，不是 mod 设置。设置要放 mod 自己的配置文件。

## 最小可运行形状

```csharp
[SaveableClass(12345)]          // 这个 id 会写进 .sav，不能随意改
public class MyModState
{
    [SaveableField(1)]          // 字段 id 在类内唯一
    public int Reputation;

    [SaveableProperty(2)]       // 属性需要可访问的 getter/setter
    public List<Hero> FavoredHeroes { get; set; }
}
```

## 导航

- ↑ [跨版本中枢 / 任务入口](../)
- ↑ [站点首页](../../)
- ↔ [存档系统](../../v1.3.15/zh/architecture/save-system) · [存档指南](../../v1.3.15/zh/guide/save-system-guide)
