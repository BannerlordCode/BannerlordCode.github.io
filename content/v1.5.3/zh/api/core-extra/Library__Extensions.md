---
title: "Extensions"
description: "Extensions 的自动生成类参考。"
---
# Extensions

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class Extensions `
**Base:** System.Object
**Source:** TaleWorlds.Library/Extensions.cs

## 概述

`Extensions` 的自动生成类参考页面。声明来自 `TaleWorlds.Library/Extensions.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetTypesSafe
`public static List<Type> GetTypesSafe(this Assembly assembly,Func<Type,bool> func = null) `

### GetReferencedAssembliesSafe
`public static AssemblyName[] GetReferencedAssembliesSafe(this Assembly assembly) `

### GetReferencingAssembliesSafe
`public static Assembly[] GetReferencingAssembliesSafe(this Assembly baseAssembly,Func<Assembly,bool> func = null) `

### GetCustomAttributesSafe
`public static object[] GetCustomAttributesSafe(this Type type,Type attributeType,bool inherit) `
`public static object[] GetCustomAttributesSafe(this Type type,bool inherit) `
`public static IEnumerable<Attribute> GetCustomAttributesSafe(this Type type,Type attributeType) `
`public static object[] GetCustomAttributesSafe(this PropertyInfo property,Type attributeType,bool inherit) `
`public static object[] GetCustomAttributesSafe(this PropertyInfo property,bool inherit) `
`public static IEnumerable<Attribute> GetCustomAttributesSafe(this PropertyInfo property,Type attributeType) `
`public static object[] GetCustomAttributesSafe(this FieldInfo field,Type attributeType,bool inherit) `
`public static object[] GetCustomAttributesSafe(this FieldInfo field,bool inherit) `
`public static IEnumerable<Attribute> GetCustomAttributesSafe(this FieldInfo field,Type attributeType) `
`public static object[] GetCustomAttributesSafe(this MethodInfo method,Type attributeType,bool inherit) `
`public static object[] GetCustomAttributesSafe(this MethodInfo method,bool inherit) `
`public static IEnumerable<Attribute> GetCustomAttributesSafe(this MethodInfo method,Type attributeType) `
`public static object[] GetCustomAttributesSafe(this Assembly assembly,Type attributeType,bool inherit) `
`public static object[] GetCustomAttributesSafe(this Assembly assembly,bool inherit) `
`public static IEnumerable<Attribute> GetCustomAttributesSafe(this Assembly assembly,Type attributeType) `

### GetDeterministicHashCode
`public static int GetDeterministicHashCode(this string text) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
